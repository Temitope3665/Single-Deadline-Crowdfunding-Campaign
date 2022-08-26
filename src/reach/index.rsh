/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
'reach 0.1';

const commonInteract = {
  reportTransfer: Fun([UInt], Null),
  reportCancellation: Fun([], Null),
  reportPayment : Fun([UInt], Null),
  reportDeadline: Fun([], Null),
  goalAchieved: Bool,
};

const receiverInteract = {
  ...commonInteract,
  projectCost: UInt,
  project: Bytes(128),
  reportReady: Fun([UInt], Null),
};

const funderInteract = {
  ...commonInteract,
  confirmBacked: Fun([UInt], Bool),
  reportProject: Fun([UInt], Null),
  shouldBackProject: Fun([UInt], Bool),
  amountBacked: UInt,
};

export const main = Reach.App(() => {
  const receiver = Participant('Receiver', receiverInteract);
  const funder = Participant('Funder', funderInteract);
  init();

  // have the receiver publish the ticket already 
  receiver.only(() => {
    const projectCost = declassify(interact.projectCost);
  });
  receiver.publish(projectCost);
  receiver.interact.reportReady(projectCost);
  commit();

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