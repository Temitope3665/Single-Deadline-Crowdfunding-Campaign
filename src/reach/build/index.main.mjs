// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bystander(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bystander expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bystander expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167, v168, v169, v170, v171], secs: v173, time: v172, didSend: v43, from: v166 } = txn1;
  ;
  const v176 = v167;
  const v183 = stdlib.add(v172, v169);
  const v191 = stdlib.add(v183, v170);
  const v199 = stdlib.add(v191, v171);
  stdlib.protect(ctc2, await interact.funded(), {
    at: './index.rsh:34:24:application',
    fs: ['at ./index.rsh:33:11:application call to [unknown function] (defined at: ./index.rsh:33:46:function exp)'],
    msg: 'funded',
    who: 'Bystander'
    });
  
  await ctc.waitUntilTime(v183);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v191],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: ['time', v199],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      stdlib.protect(ctc2, await interact.ready(), {
        at: './index.rsh:38:38:application',
        fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at ./index.rsh:59:25:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:58:25:function exp)', 'at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
        msg: 'ready',
        who: 'Bystander'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v166, v168, v176, v183, v191, v199],
        evt_cnt: 0,
        funcNum: 3,
        lct: v172,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:44:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v234, time: v233, didSend: v117, from: v232 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v232,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v234, time: v233, didSend: v117, from: v232 } = txn4;
      ;
      ;
      stdlib.protect(ctc2, await interact.recvd(v168), {
        at: './index.rsh:48:38:application',
        fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)', 'at ./index.rsh:59:25:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:58:25:function exp)', 'at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
        msg: 'recvd',
        who: 'Bystander'
        });
      
      return;
      
      }
    else {
      const {data: [], secs: v222, time: v221, didSend: v96, from: v220 } = txn3;
      ;
      const v223 = stdlib.addressEq(v166, v220);
      stdlib.assert(v223, {
        at: './index.rsh:41:15:dot',
        fs: ['at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
        msg: 'sender correct',
        who: 'Bystander'
        });
      ;
      return;
      }
    }
  else {
    const {data: [], secs: v210, time: v209, didSend: v74, from: v208 } = txn2;
    ;
    const v211 = stdlib.addressEq(v176, v208);
    stdlib.assert(v211, {
      at: './index.rsh:41:15:dot',
      fs: ['at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
      msg: 'sender correct',
      who: 'Bystander'
      });
    ;
    return;
    }
  
  
  
  };
export async function Funder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Funder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Funder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Object({
    dormant: ctc0,
    maturity: ctc0,
    payment: ctc0,
    receiverAddr: ctc1,
    refund: ctc0
    });
  const ctc3 = stdlib.T_Null;
  
  
  const v155 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:25:46:application',
    fs: ['at ./index.rsh:22:18:application call to [unknown function] (defined at: ./index.rsh:22:22:function exp)'],
    msg: 'getParams',
    who: 'Funder'
    });
  const v156 = v155.dormant;
  const v157 = v155.maturity;
  const v158 = v155.payment;
  const v159 = v155.receiverAddr;
  const v160 = v155.refund;
  
  const txn1 = await (ctc.sendrecv({
    args: [v159, v158, v157, v160, v156],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc0, ctc0],
    pay: [v158, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v167, v168, v169, v170, v171], secs: v173, time: v172, didSend: v43, from: v166 } = txn1;
      
      sim_r.txns.push({
        amt: v168,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v176 = v167;
      const v183 = stdlib.add(v172, v169);
      const v191 = stdlib.add(v183, v170);
      const v199 = stdlib.add(v191, v171);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v167, v168, v169, v170, v171], secs: v173, time: v172, didSend: v43, from: v166 } = txn1;
  ;
  const v176 = v167;
  const v183 = stdlib.add(v172, v169);
  const v191 = stdlib.add(v183, v170);
  const v199 = stdlib.add(v191, v171);
  stdlib.protect(ctc3, await interact.funded(), {
    at: './index.rsh:34:24:application',
    fs: ['at ./index.rsh:33:11:application call to [unknown function] (defined at: ./index.rsh:33:46:function exp)'],
    msg: 'funded',
    who: 'Funder'
    });
  
  await ctc.waitUntilTime(v183);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v191],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    stdlib.protect(ctc3, await interact.ready(), {
      at: './index.rsh:38:38:application',
      fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
      msg: 'ready',
      who: 'Funder'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v166, v168, v176, v183, v191, v199],
      evt_cnt: 0,
      funcNum: 2,
      lct: v172,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:41:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v222, time: v221, didSend: v96, from: v220 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v166,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v199],
      tys: [ctc1, ctc0, ctc1, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 3,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v234, time: v233, didSend: v117, from: v232 } = txn4;
      ;
      ;
      return;
      
      }
    else {
      const {data: [], secs: v222, time: v221, didSend: v96, from: v220 } = txn3;
      ;
      const v223 = stdlib.addressEq(v166, v220);
      stdlib.assert(v223, {
        at: './index.rsh:41:15:dot',
        fs: ['at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
        msg: 'sender correct',
        who: 'Funder'
        });
      ;
      stdlib.protect(ctc3, await interact.recvd(v168), {
        at: './index.rsh:48:38:application',
        fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)', 'at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
        msg: 'recvd',
        who: 'Funder'
        });
      
      return;
      }
    }
  else {
    const {data: [], secs: v210, time: v209, didSend: v74, from: v208 } = txn2;
    ;
    const v211 = stdlib.addressEq(v176, v208);
    stdlib.assert(v211, {
      at: './index.rsh:41:15:dot',
      fs: ['at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
      msg: 'sender correct',
      who: 'Funder'
      });
    ;
    return;
    }
  
  
  
  };
export async function Receiver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Receiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Receiver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v167, v168, v169, v170, v171], secs: v173, time: v172, didSend: v43, from: v166 } = txn1;
  ;
  const v176 = ctc.iam(v167);
  const v183 = stdlib.add(v172, v169);
  const v191 = stdlib.add(v183, v170);
  const v199 = stdlib.add(v191, v171);
  stdlib.protect(ctc2, await interact.funded(), {
    at: './index.rsh:34:24:application',
    fs: ['at ./index.rsh:33:11:application call to [unknown function] (defined at: ./index.rsh:33:46:function exp)'],
    msg: 'funded',
    who: 'Receiver'
    });
  
  await ctc.waitUntilTime(v183);
  stdlib.protect(ctc2, await interact.ready(), {
    at: './index.rsh:38:38:application',
    fs: ['at ./index.rsh:38:17:application call to [unknown function] (defined at: ./index.rsh:38:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
    msg: 'ready',
    who: 'Receiver'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v166, v168, v176, v183, v191, v199],
    evt_cnt: 0,
    funcNum: 1,
    lct: v172,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v210, time: v209, didSend: v74, from: v208 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v176,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v191],
    tys: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: ['time', v199],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 3,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v234, time: v233, didSend: v117, from: v232 } = txn4;
      ;
      ;
      return;
      
      }
    else {
      const {data: [], secs: v222, time: v221, didSend: v96, from: v220 } = txn3;
      ;
      const v223 = stdlib.addressEq(v166, v220);
      stdlib.assert(v223, {
        at: './index.rsh:41:15:dot',
        fs: ['at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
        msg: 'sender correct',
        who: 'Receiver'
        });
      ;
      return;
      }
    }
  else {
    const {data: [], secs: v210, time: v209, didSend: v74, from: v208 } = txn2;
    ;
    const v211 = stdlib.addressEq(v176, v208);
    stdlib.assert(v211, {
      at: './index.rsh:41:15:dot',
      fs: ['at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
      msg: 'sender correct',
      who: 'Receiver'
      });
    ;
    stdlib.protect(ctc2, await interact.recvd(v168), {
      at: './index.rsh:48:38:application',
      fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
      msg: 'recvd',
      who: 'Receiver'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAHAAEgAgNYUCYCAQAAIjUAMRhBAfopZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQACSSSEEDEAAPSEEEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEp2XEtLAyBjQDIQVbD0SxIrIBNAMkW7III7IQMQCyB7NCAThIIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABEGxQE2wMgZJNAMhBlsPRDQDIQVbDEQ0/zEAEkSxIrIBNAMkW7III7IQNP+yB7NCAOpJIwxAAFFIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcoIDX/gUhbNf6ABJqLkXSwMgZJNP4PRDQDIQZbDEQ0/zEAEkSxIrIBNAMkW7III7IQNP+yB7NCAJNIgaCNBogA+CI0ARJENARJIhJMNAISEURJNQVJSklXACA1/yRbNf6BKFs1/YEwWzX8gThbNfuABApjOfw0/1A0/hZQNP0WUDT8FlA0+xZQsDT+iACrNP81+jIGNP0ISTX5NPwISTX4NPsINfcxADT+FlA0+lA0+RZQNPgWUDT3FlAoSwFXAGBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v167",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v169",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v167",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v168",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v169",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v171",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cd638038062000cd683398101604081905262000026916200035f565b6000808055436003556040805160808082018352838252602080830185905282840185905260608084019590955283513381528651818301528682015180516001600160a01b031682870152918201518187015293810151848301529384015160a0840152929092015160c08201527f329e01b8be46df29459e1d2184a1ec9ad22dcf40f152acfd777a1e2b39e4cf7a9060e00160405180910390a16020808301510151620000d9903414600762000227565b602082018051516001600160a01b031682525160400151620000fc9043620003f9565b6020808301829052830151606001516200011691620003f9565b604082018190526020830151608001516200013191620003f9565b6060808301919091526040805160c0810182526000808252602082018190529181018290529182018190526080820181905260a08201523380825260208481015181015181840190815284516001600160a01b039081166040808701918252878501516060808901918252828a01516080808b01918252828c015160a0808d019182526001600081905543905586519a8b019b909b529751948901949094529351909416938601939093529151918401919091525192820192909252905160c082015260e001604051602081830303815290604052600290805190602001906200021d92919062000251565b505050506200045d565b816200024d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200025f9062000420565b90600052602060002090601f016020900481019282620002835760008555620002ce565b82601f106200029e57805160ff1916838001178555620002ce565b82800160010185558215620002ce579182015b82811115620002ce578251825591602001919060010190620002b1565b50620002dc929150620002e0565b5090565b5b80821115620002dc5760008155600101620002e1565b604080519081016001600160401b03811182821017156200032857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160a081016001600160401b03811182821017156200032857634e487b7160e01b600052604160045260246000fd5b600081830360c08112156200037357600080fd5b6200037d620002f7565b8351815260a0601f19830112156200039457600080fd5b6200039e6200032e565b60208501519092506001600160a01b0381168114620003bc57600080fd5b8083525060408401516020830152606084015160408301526080840151606083015260a08401516080830152816020820152809250505092915050565b600082198211156200041b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200043557607f821691505b602082108114156200045757634e487b7160e01b600052602260045260246000fd5b50919050565b610869806200046d6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c146100965780637eea518c146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d61009136600461069c565b6100f4565b61005d6100a436600461069c565b6102a2565b61005d6100b736600461069c565b6103f8565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e6610584565b60405161007a9291906106b4565b610104600160005414600a610621565b61011e8135158061011757506001548235145b600b610621565b60008080556002805461013090610711565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610711565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610762565b90506101d58160600151431015600c610621565b6101e681608001514310600d610621565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102179291906107f6565b60405180910390a161022b34156008610621565b6040810151610246906001600160a01b031633146009610621565b80604001516001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610287573d6000803e3d6000fd5b506000808055600181905561029e90600290610646565b5050565b6102b26001600054146015610621565b6102cc813515806102c557506001548235145b6016610621565b6000808055600280546102de90610711565b80601f016020809104026020016040519081016040528092919081815260200182805461030a90610711565b80156103575780601f1061032c57610100808354040283529160200191610357565b820191906000526020600020905b81548152906001019060200180831161033a57829003601f168201915b505050505080602001905181019061036f9190610762565b90506103838160a001514310156017610621565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c633836040516103b49291906107f6565b60405180910390a16103c834156014610621565b6020810151604051339180156108fc02916000818181858888f19350505050158015610287573d6000803e3d6000fd5b6104086001600054146010610621565b6104228135158061041b57506001548235145b6011610621565b60008080556002805461043490610711565b80601f016020809104026020016040519081016040528092919081815260200182805461046090610711565b80156104ad5780601f10610482576101008083540402835291602001916104ad565b820191906000526020600020905b81548152906001019060200180831161049057829003601f168201915b50505050508060200190518101906104c59190610762565b90506104d981608001514310156012610621565b6104ea8160a0015143106013610621565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161051b9291906107f6565b60405180910390a161052f3415600e610621565b8051610547906001600160a01b03163314600f610621565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610287573d6000803e3d6000fd5b60006060600054600280805461059990610711565b80601f01602080910402602001604051908101604052809291908181526020018280546105c590610711565b80156106125780601f106105e757610100808354040283529160200191610612565b820191906000526020600020905b8154815290600101906020018083116105f557829003601f168201915b50505050509050915091509091565b8161029e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461065290610711565b6000825580601f10610662575050565b601f0160209004906000526020600020908101906106809190610683565b50565b5b808211156106985760008155600101610684565b5090565b6000604082840312156106ae57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156106e8578581018301518582016060015282016106cc565b818111156106fa576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061072557607f821691505b602082108114156106ae57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461075d57600080fd5b919050565b600060c0828403121561077457600080fd5b60405160c0810181811067ffffffffffffffff821117156107a557634e487b7160e01b600052604160045260246000fd5b6040526107b183610746565b8152602083015160208201526107c960408401610746565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461082457600080fd5b8060408501525050939250505056fea264697066735822122075a1fb3aeb7df4a80d22585f036c2e18b7ddda0d35fa1a59924c9cfbbeb63ce564736f6c634300080c0033`,
  BytecodeLen: 3286,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:47:17:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:25:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:58:25:function exp)', 'at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:47:17:after expr stmt semicolon',
    fs: ['at ./index.rsh:55:21:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)', 'at ./index.rsh:42:67:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:47:17:after expr stmt semicolon',
    fs: ['at ./index.rsh:51:17:application call to "giveChance" (defined at: ./index.rsh:37:38:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bystander": Bystander,
  "Funder": Funder,
  "Receiver": Receiver
  };
export const _APIs = {
  };
