/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
'reach 0.1';

// 1. The Receiver publishes the ticket price and deadline
// 2. While the deadline has yet to be reached:
//     2a. Allow a funder to purchase a ticket
//     2b. Keep track of last and all funder
// 3. Transfer the balance to the last person who bought a ticket || to the receiver

const commonInteract = {
  reportTransfer: Fun([UInt], Null),
  reportCancellation: Fun([], Null),
  reportPayment : Fun([UInt], Null),
  reportDeadline: Fun([], Null),
  // showOutcome: Fun([Address], Null),
  goalAchieved: Bool,
};

const receiverInteract = {
  ...commonInteract,
  projectCost: UInt,
  // deadline: UInt,
  project: Bytes(128),
  reportReady: Fun([UInt], Null),
};

const funderInteract = {
  ...commonInteract,
  confirmBacked: Fun([UInt], Bool),
  // reportProject: Fun([Bytes(128)], Null),
  reportProject: Fun([UInt], Null),
  shouldBackProject: Fun([UInt], Bool),
  amountBacked: UInt,
  // showBacked: Fun([Address], Null),
};

export const main = Reach.App(() => {
  const receiver = Participant('Receiver', receiverInteract);
  const funder = Participant('Funder', funderInteract);
  init();

  // show outcome to everyone when the goal is reached
  // const showOutcome = (who) => 
  //   each([receiver, funder], () => {
  //     interact.showOutcome(who);
  //   })

  // have the receiver publish the ticket already 
  receiver.only(() => {
    const projectCost = declassify(interact.projectCost);
    // const deadline = declassify(interact.deadline);
  });
  receiver.publish(projectCost);
  receiver.interact.reportReady(projectCost);
  // receiver.interact.reportReady(deadline);
  commit();

  // until timeout, allow funder to fund the project
  // const [ keepFunding, winner, projectBacked ] = parallelReduce([true, receiver, 0])
  //     .invariant(balance() == projectBacked * projectCost)
  //     .while(keepFunding)
  //     .case(
  //       funder, () => ({
  //         when: declassify(interact.shouldBackProject(projectCost)),
  //       }),
  //       (_) => projectCost,
  //       (_) => {
  //         const Funder = this;
  //           funder.only(() => interact.reportProject(funder));
  //           return [ true, Funder, projectBacked + 1 ];
  //       }
  //     )
  //     .timeout(relativeTime(deadline), () => {
  //       Anybody.publish();
  //       return [ false, winner, projectBacked ]; });

  //   // the sum of the money is transferred to the receiver
  //   transfer(balance()).to(receiver);
  //   commit();
  //   showOutcome(receiver);

  funder.only(() => {
    const willBack = declassify(interact.confirmBacked(projectCost));
  })
  funder.publish(willBack);

  if (!willBack) {
    commit();
    each([receiver, funder], () => interact.reportCancellation());
    exit();
  } else {
    commit();
  }

  funder.pay(projectCost);
  each([receiver, funder], () => interact.reportPayment(projectCost));
  commit();

  receiver.only(() => { const project = declassify(interact.project); });
  receiver.publish(project);
  transfer(projectCost).to(receiver);
  commit();

  each([receiver, funder], () => interact.reportTransfer(projectCost));
  funder.interact.reportProject(projectCost);

  exit();
});
