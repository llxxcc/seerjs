var Apis =  require("seerjs-ws").Apis;

let olNode = "test node api";
let localNode = "ws://127.0.0.1:8090";
Apis.instance(olNode, true).init_promise.then(() => {

    Promise.all([
        Apis.instance().db_api().exec("get_key_references", [["SEER83SC45e85rDppTmyTRKRCTZnPohX54jknvgvSoUdTAmcBoYvbS"]]),
        Apis.instance().db_api().exec("get_account_references", ["1.2.3000"])
    ])
    .then(res => {
        let [refs, accountRefs] = res;
        console.log("keyRefs:", refs, "accountRefs", accountRefs);
        let fullAccounts = [];
        refs[0].forEach(id => {
            if (fullAccounts.indexOf(id) === -1) {
                fullAccounts.push(id);
            }
        });
        accountRefs.forEach(id => {
            if (fullAccounts.indexOf(id) === -1) {
                fullAccounts.push(id);
            }
        });
        Apis.instance().db_api().exec("get_full_accounts", [fullAccounts, false]).then(accounts => {
            accounts.forEach(account => {
                console.log("account:", account[1].account);
            });
        });
    });
});
