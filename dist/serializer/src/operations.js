"use strict";

exports.__esModule = true;
exports.stealth_memo_data = exports.signed_transaction = exports.transaction = exports.seer_authenticator_process = exports.seer_authenticator_update = exports.seer_authenticator_create = exports.seer_supervisor_process = exports.seer_supervisor_update = exports.seer_supervisor_create = exports.account_authentication_apply = exports.seer_house_update = exports.seer_house_create = exports.seer_room_claim = exports.seer_room_input = exports.seer_room_settle = exports.seer_room_final = exports.seer_room_close = exports.seer_room_stop_participating = exports.seer_room_open = exports.seer_room_participate = exports.seer_room_update = exports.seer_room_create = exports.seer_room_option_type3 = exports.seer_room_option_type3_history = exports.result_of_win = exports.index3 = exports.index = exports.multi_participate2 = exports.multi_participate = exports.single_participate = exports.seer_room_initial_option = exports.advanced_special_option = exports.lmsr_special_option = exports.room_option = exports.seer_oracle_filter = exports.oracle_input = exports.oracle_update = exports.oracle_create = exports.witness_claim_collateral = exports.witness_cancel_collateral = exports.witness_create_collateral = exports.asset_claim_fees = exports.transfer_from_blind = exports.blind_transfer = exports.blind_input = exports.transfer_to_blind = exports.blind_output = exports.stealth_confirmation = exports.override_transfer = exports.balance_claim = exports.assert = exports.block_id_predicate = exports.asset_symbol_eq_lit_predicate = exports.account_name_eq_lit_predicate = exports.custom = exports.vesting_balance_withdraw = exports.vesting_balance_create = exports.cdd_vesting_policy_initializer = exports.linear_vesting_policy_initializer = exports.committee_member_update_global_parameters = exports.chain_parameters = exports.committee_member_update = exports.committee_member_create = exports.withdraw_permission_delete = exports.withdraw_permission_claim = exports.withdraw_permission_update = exports.withdraw_permission_create = exports.proposal_delete = exports.proposal_update = exports.proposal_create = undefined;
exports.op_wrapper = exports.witness_update = exports.witness_create = exports.asset_fund_fee_pool = exports.asset_reserve = exports.asset_issue = exports.asset_update = exports.asset_create = exports.asset_options = exports.price = exports.account_transfer = exports.account_upgrade = exports.account_whitelist = exports.account_update = exports.account_create = exports.account_options = exports.authority = exports.fill_order = exports.call_order_update = exports.limit_order_cancel = exports.limit_order_create = exports.transfer = exports.memo_data = exports.signed_block_header = exports.block_header = exports.signed_block = exports.processed_transaction = exports.asset = exports.void_result = exports.fee_schedule = exports.asset_create_market_operation_fee_parameters = exports.seer_authenticator_process_operation_fee_parameters = exports.seer_authenticator_update_operation_fee_parameters = exports.seer_authenticator_create_operation_fee_parameters = exports.seer_supervisor_process_operation_fee_parameters = exports.seer_supervisor_update_operation_fee_parameters = exports.seer_supervisor_create_operation_fee_parameters = exports.account_authentication_apply_fee_parameters = exports.seer_house_update_fee_parameters = exports.seer_house_create_fee_parameters = exports.seer_room_claim_fee_parameters = exports.seer_room_close_fee_parameters = exports.seer_room_participate_fee_parameters = exports.seer_room_settle_fee_parameters = exports.seer_room_final_fee_parameters = exports.seer_room_stop_participating_fee_parameters = exports.seer_room_open_fee_parameters = exports.seer_room_input_fee_parameters = exports.seer_room_update_fee_parameters = exports.seer_room_create_fee_parameters = exports.seer_oracle_input_fee_parameters = exports.seer_oracle_update_fee_parameters = exports.seer_oracle_create_fee_parameters = exports.asset_claim_fees_operation_fee_parameters = exports.asset_settle_cancel_operation_fee_parameters = exports.transfer_from_blind_operation_fee_parameters = exports.blind_transfer_operation_fee_parameters = exports.transfer_to_blind_operation_fee_parameters = exports.override_transfer_operation_fee_parameters = exports.balance_claim_operation_fee_parameters = exports.assert_operation_fee_parameters = exports.custom_operation_fee_parameters = exports.vesting_balance_withdraw_operation_fee_parameters = exports.vesting_balance_create_operation_fee_parameters = exports.committee_member_update_global_parameters_operation_fee_parameters = exports.committee_member_update_operation_fee_parameters = exports.committee_member_create_operation_fee_parameters = exports.withdraw_permission_delete_operation_fee_parameters = exports.withdraw_permission_claim_operation_fee_parameters = exports.withdraw_permission_update_operation_fee_parameters = exports.withdraw_permission_create_operation_fee_parameters = exports.proposal_delete_operation_fee_parameters = exports.proposal_update_operation_fee_parameters = exports.proposal_create_operation_fee_parameters = exports.witness_claim_collateral_operation_fee_parameters = exports.witness_cancel_collateral_operation_fee_parameters = exports.witness_create_collateral_operation_fee_parameters = exports.witness_update_operation_fee_parameters = exports.witness_create_operation_fee_parameters = exports.asset_publish_feed_operation_fee_parameters = exports.asset_global_settle_operation_fee_parameters = exports.asset_settle_operation_fee_parameters = exports.asset_fund_fee_pool_operation_fee_parameters = exports.asset_reserve_operation_fee_parameters = exports.asset_issue_operation_fee_parameters = exports.asset_update_feed_producers_operation_fee_parameters = exports.asset_update_bitasset_operation_fee_parameters = exports.asset_update_operation_fee_parameters = exports.asset_create_operation_fee_parameters = exports.account_transfer_operation_fee_parameters = exports.account_upgrade_operation_fee_parameters = exports.account_whitelist_operation_fee_parameters = exports.account_update_operation_fee_parameters = exports.account_create_operation_fee_parameters = exports.fill_order_operation_fee_parameters = exports.call_order_update_operation_fee_parameters = exports.limit_order_cancel_operation_fee_parameters = exports.limit_order_create_operation_fee_parameters = exports.transfer_operation_fee_parameters = exports.operation = undefined;

var _types = require("./types");

var _types2 = _interopRequireDefault(_types);

var _serializer = require("./serializer");

var _serializer2 = _interopRequireDefault(_serializer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uint8 = _types2.default.uint8,
    uint16 = _types2.default.uint16,
    uint32 = _types2.default.uint32,
    int64 = _types2.default.int64,
    uint64 = _types2.default.uint64,
    string = _types2.default.string,
    bytes = _types2.default.bytes,
    bool = _types2.default.bool,
    array = _types2.default.array,
    fixed_array = _types2.default.fixed_array,
    protocol_id_type = _types2.default.protocol_id_type,
    object_id_type = _types2.default.object_id_type,
    vote_id = _types2.default.vote_id,
    future_extensions = _types2.default.future_extensions,
    static_variant = _types2.default.static_variant,
    map = _types2.default.map,
    set = _types2.default.set,
    public_key = _types2.default.public_key,
    address = _types2.default.address,
    time_point_sec = _types2.default.time_point_sec,
    optional = _types2.default.optional;


future_extensions = _types2.default.void;

/*
When updating generated code
Replace:  operation = static_variant [
with:     operation.st_operations = [

Delete:
public_key = new Serializer(
    "public_key"
    key_data: bytes 33
)

*/
// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
// module.exports["operation"] = operation;

exports.operation = operation;
// For module.exports

var Serializer = function Serializer(operation_name, serilization_types_object) {
    return new _serializer2.default(operation_name, serilization_types_object);
    // return module.exports[operation_name] = s;
};

// Custom-types follow Generated code:

// ##  Generated code follows
// # programs/js_operation_serializer > npm i -g decaffeinate
// ## -------------------------------
var transfer_operation_fee_parameters = exports.transfer_operation_fee_parameters = new Serializer("transfer_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var limit_order_create_operation_fee_parameters = exports.limit_order_create_operation_fee_parameters = new Serializer("limit_order_create_operation_fee_parameters", { fee: uint64 });

var limit_order_cancel_operation_fee_parameters = exports.limit_order_cancel_operation_fee_parameters = new Serializer("limit_order_cancel_operation_fee_parameters", { fee: uint64 });

var call_order_update_operation_fee_parameters = exports.call_order_update_operation_fee_parameters = new Serializer("call_order_update_operation_fee_parameters", { fee: uint64 });

var fill_order_operation_fee_parameters = exports.fill_order_operation_fee_parameters = new Serializer("fill_order_operation_fee_parameters");

var account_create_operation_fee_parameters = exports.account_create_operation_fee_parameters = new Serializer("account_create_operation_fee_parameters", { basic_fee: uint64,
    premium_fee: uint64,
    price_per_kbyte: uint32 });

var account_update_operation_fee_parameters = exports.account_update_operation_fee_parameters = new Serializer("account_update_operation_fee_parameters", { fee: int64,
    price_per_kbyte: uint32 });

var account_whitelist_operation_fee_parameters = exports.account_whitelist_operation_fee_parameters = new Serializer("account_whitelist_operation_fee_parameters", { fee: int64 });

var account_upgrade_operation_fee_parameters = exports.account_upgrade_operation_fee_parameters = new Serializer("account_upgrade_operation_fee_parameters", { membership_annual_fee: uint64,
    membership_lifetime_fee: uint64 });

var account_transfer_operation_fee_parameters = exports.account_transfer_operation_fee_parameters = new Serializer("account_transfer_operation_fee_parameters", { fee: uint64 });

var asset_create_operation_fee_parameters = exports.asset_create_operation_fee_parameters = new Serializer("asset_create_operation_fee_parameters", { symbol3: uint64,
    symbol4: uint64,
    long_symbol: uint64,
    price_per_kbyte: uint32 });

var asset_update_operation_fee_parameters = exports.asset_update_operation_fee_parameters = new Serializer("asset_update_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var asset_update_bitasset_operation_fee_parameters = exports.asset_update_bitasset_operation_fee_parameters = new Serializer("asset_update_bitasset_operation_fee_parameters", { fee: uint64 });

var asset_update_feed_producers_operation_fee_parameters = exports.asset_update_feed_producers_operation_fee_parameters = new Serializer("asset_update_feed_producers_operation_fee_parameters", { fee: uint64 });

var asset_issue_operation_fee_parameters = exports.asset_issue_operation_fee_parameters = new Serializer("asset_issue_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var asset_reserve_operation_fee_parameters = exports.asset_reserve_operation_fee_parameters = new Serializer("asset_reserve_operation_fee_parameters", { fee: uint64 });

var asset_fund_fee_pool_operation_fee_parameters = exports.asset_fund_fee_pool_operation_fee_parameters = new Serializer("asset_fund_fee_pool_operation_fee_parameters", { fee: uint64 });

var asset_settle_operation_fee_parameters = exports.asset_settle_operation_fee_parameters = new Serializer("asset_settle_operation_fee_parameters", { fee: uint64 });

var asset_global_settle_operation_fee_parameters = exports.asset_global_settle_operation_fee_parameters = new Serializer("asset_global_settle_operation_fee_parameters", { fee: uint64 });

var asset_publish_feed_operation_fee_parameters = exports.asset_publish_feed_operation_fee_parameters = new Serializer("asset_publish_feed_operation_fee_parameters", { fee: uint64 });

var witness_create_operation_fee_parameters = exports.witness_create_operation_fee_parameters = new Serializer("witness_create_operation_fee_parameters", { fee: uint64 });

var witness_update_operation_fee_parameters = exports.witness_update_operation_fee_parameters = new Serializer("witness_update_operation_fee_parameters", { fee: int64 });

var witness_create_collateral_operation_fee_parameters = exports.witness_create_collateral_operation_fee_parameters = new Serializer("witness_create_collateral_operation_fee_parameters", { fee: int64 });

var witness_cancel_collateral_operation_fee_parameters = exports.witness_cancel_collateral_operation_fee_parameters = new Serializer("witness_cancel_collateral_operation_fee_parameters", { fee: int64 });

var witness_claim_collateral_operation_fee_parameters = exports.witness_claim_collateral_operation_fee_parameters = new Serializer("witness_claim_collateral_operation_fee_parameters", { fee: int64 });

var proposal_create_operation_fee_parameters = exports.proposal_create_operation_fee_parameters = new Serializer("proposal_create_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var proposal_update_operation_fee_parameters = exports.proposal_update_operation_fee_parameters = new Serializer("proposal_update_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var proposal_delete_operation_fee_parameters = exports.proposal_delete_operation_fee_parameters = new Serializer("proposal_delete_operation_fee_parameters", { fee: uint64 });

var withdraw_permission_create_operation_fee_parameters = exports.withdraw_permission_create_operation_fee_parameters = new Serializer("withdraw_permission_create_operation_fee_parameters", { fee: uint64 });

var withdraw_permission_update_operation_fee_parameters = exports.withdraw_permission_update_operation_fee_parameters = new Serializer("withdraw_permission_update_operation_fee_parameters", { fee: uint64 });

var withdraw_permission_claim_operation_fee_parameters = exports.withdraw_permission_claim_operation_fee_parameters = new Serializer("withdraw_permission_claim_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var withdraw_permission_delete_operation_fee_parameters = exports.withdraw_permission_delete_operation_fee_parameters = new Serializer("withdraw_permission_delete_operation_fee_parameters", { fee: uint64 });

var committee_member_create_operation_fee_parameters = exports.committee_member_create_operation_fee_parameters = new Serializer("committee_member_create_operation_fee_parameters", { fee: uint64 });

var committee_member_update_operation_fee_parameters = exports.committee_member_update_operation_fee_parameters = new Serializer("committee_member_update_operation_fee_parameters", { fee: uint64 });

var committee_member_update_global_parameters_operation_fee_parameters = exports.committee_member_update_global_parameters_operation_fee_parameters = new Serializer("committee_member_update_global_parameters_operation_fee_parameters", { fee: uint64 });

var vesting_balance_create_operation_fee_parameters = exports.vesting_balance_create_operation_fee_parameters = new Serializer("vesting_balance_create_operation_fee_parameters", { fee: uint64 });

var vesting_balance_withdraw_operation_fee_parameters = exports.vesting_balance_withdraw_operation_fee_parameters = new Serializer("vesting_balance_withdraw_operation_fee_parameters", { fee: uint64 });

var custom_operation_fee_parameters = exports.custom_operation_fee_parameters = new Serializer("custom_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var assert_operation_fee_parameters = exports.assert_operation_fee_parameters = new Serializer("assert_operation_fee_parameters", { fee: uint64 });

var balance_claim_operation_fee_parameters = exports.balance_claim_operation_fee_parameters = new Serializer("balance_claim_operation_fee_parameters");

var override_transfer_operation_fee_parameters = exports.override_transfer_operation_fee_parameters = new Serializer("override_transfer_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var transfer_to_blind_operation_fee_parameters = exports.transfer_to_blind_operation_fee_parameters = new Serializer("transfer_to_blind_operation_fee_parameters", { fee: uint64,
    price_per_output: uint32 });

var blind_transfer_operation_fee_parameters = exports.blind_transfer_operation_fee_parameters = new Serializer("blind_transfer_operation_fee_parameters", { fee: uint64,
    price_per_output: uint32 });

var transfer_from_blind_operation_fee_parameters = exports.transfer_from_blind_operation_fee_parameters = new Serializer("transfer_from_blind_operation_fee_parameters", { fee: uint64 });

var asset_settle_cancel_operation_fee_parameters = exports.asset_settle_cancel_operation_fee_parameters = new Serializer("asset_settle_cancel_operation_fee_parameters");

var asset_claim_fees_operation_fee_parameters = exports.asset_claim_fees_operation_fee_parameters = new Serializer("asset_claim_fees_operation_fee_parameters", { fee: uint64 });

var seer_oracle_create_fee_parameters = exports.seer_oracle_create_fee_parameters = new Serializer("seer_oracle_create_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
});

var seer_oracle_update_fee_parameters = exports.seer_oracle_update_fee_parameters = new Serializer("seer_oracle_update_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
});

var seer_oracle_input_fee_parameters = exports.seer_oracle_input_fee_parameters = new Serializer("seer_oracle_input_fee_parameters", { fee: uint64 });

var seer_room_create_fee_parameters = exports.seer_room_create_fee_parameters = new Serializer("seer_room_create_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
});

var seer_room_update_fee_parameters = exports.seer_room_update_fee_parameters = new Serializer("seer_room_update_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
});

var seer_room_input_fee_parameters = exports.seer_room_input_fee_parameters = new Serializer("seer_room_input_fee_parameters", {
    fee: uint64
});

var seer_room_open_fee_parameters = exports.seer_room_open_fee_parameters = new Serializer("seer_room_open_fee_parameters", {
    fee: uint64
});

var seer_room_stop_participating_fee_parameters = exports.seer_room_stop_participating_fee_parameters = new Serializer("seer_room_stop_participating_fee_parameters", {
    fee: uint64
});

var seer_room_final_fee_parameters = exports.seer_room_final_fee_parameters = new Serializer("seer_room_final_fee_parameters", {
    fee: uint64
});

var seer_room_settle_fee_parameters = exports.seer_room_settle_fee_parameters = new Serializer("seer_room_settle_fee_parameters", {
    fee: uint64
});

var seer_room_participate_fee_parameters = exports.seer_room_participate_fee_parameters = new Serializer("seer_room_participate_fee_parameters", {
    fee: uint64
});

var seer_room_close_fee_parameters = exports.seer_room_close_fee_parameters = new Serializer("seer_room_close_fee_parameters", {
    fee: uint64
});

var seer_room_claim_fee_parameters = exports.seer_room_claim_fee_parameters = new Serializer("seer_room_claim_fee_parameters", {
    fee: uint64
});

var seer_house_create_fee_parameters = exports.seer_house_create_fee_parameters = new Serializer("seer_house_create_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
});

var seer_house_update_fee_parameters = exports.seer_house_update_fee_parameters = new Serializer("seer_house_update_fee_parameters", {
    fee: uint64,
    price_per_kbyte: uint32
});

var account_authentication_apply_fee_parameters = exports.account_authentication_apply_fee_parameters = new Serializer("account_authentication_apply_fee_parameters", { fee: uint64 });

var seer_supervisor_create_operation_fee_parameters = exports.seer_supervisor_create_operation_fee_parameters = new Serializer("seer_supervisor_create_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var seer_supervisor_update_operation_fee_parameters = exports.seer_supervisor_update_operation_fee_parameters = new Serializer("seer_supervisor_update_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var seer_supervisor_process_operation_fee_parameters = exports.seer_supervisor_process_operation_fee_parameters = new Serializer("seer_supervisor_process_operation_fee_parameters", { fee: uint64 });

var seer_authenticator_create_operation_fee_parameters = exports.seer_authenticator_create_operation_fee_parameters = new Serializer("seer_authenticator_create_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var seer_authenticator_update_operation_fee_parameters = exports.seer_authenticator_update_operation_fee_parameters = new Serializer("seer_authenticator_update_operation_fee_parameters", { fee: uint64,
    price_per_kbyte: uint32 });

var seer_authenticator_process_operation_fee_parameters = exports.seer_authenticator_process_operation_fee_parameters = new Serializer("seer_authenticator_process_operation_fee_parameters", { fee: uint64 });

var asset_create_market_operation_fee_parameters = exports.asset_create_market_operation_fee_parameters = new Serializer("asset_create_market_operation_fee_parameters", { first_base: uint64, second_base: uint64 });

var fee_parameters = static_variant([transfer_operation_fee_parameters, limit_order_create_operation_fee_parameters, limit_order_cancel_operation_fee_parameters, fill_order_operation_fee_parameters, account_create_operation_fee_parameters, account_update_operation_fee_parameters, account_whitelist_operation_fee_parameters, account_upgrade_operation_fee_parameters, account_transfer_operation_fee_parameters, asset_create_operation_fee_parameters, asset_update_operation_fee_parameters, asset_issue_operation_fee_parameters, asset_reserve_operation_fee_parameters, asset_fund_fee_pool_operation_fee_parameters, witness_create_operation_fee_parameters, witness_update_operation_fee_parameters, witness_create_collateral_operation_fee_parameters, witness_cancel_collateral_operation_fee_parameters, witness_claim_collateral_operation_fee_parameters, proposal_create_operation_fee_parameters, proposal_update_operation_fee_parameters, proposal_delete_operation_fee_parameters, withdraw_permission_create_operation_fee_parameters, withdraw_permission_update_operation_fee_parameters, withdraw_permission_claim_operation_fee_parameters, withdraw_permission_delete_operation_fee_parameters, committee_member_create_operation_fee_parameters, committee_member_update_operation_fee_parameters, committee_member_update_global_parameters_operation_fee_parameters, vesting_balance_create_operation_fee_parameters, vesting_balance_withdraw_operation_fee_parameters, custom_operation_fee_parameters, assert_operation_fee_parameters, balance_claim_operation_fee_parameters, override_transfer_operation_fee_parameters, transfer_to_blind_operation_fee_parameters, blind_transfer_operation_fee_parameters, transfer_from_blind_operation_fee_parameters, asset_claim_fees_operation_fee_parameters, asset_claim_fees_operation_fee_parameters, seer_oracle_create_fee_parameters, seer_oracle_update_fee_parameters, seer_oracle_input_fee_parameters, seer_room_create_fee_parameters, seer_room_update_fee_parameters, seer_room_input_fee_parameters, seer_room_open_fee_parameters, seer_room_stop_participating_fee_parameters, seer_room_final_fee_parameters, seer_room_settle_fee_parameters, seer_room_participate_fee_parameters, seer_room_close_fee_parameters, seer_room_claim_fee_parameters, seer_house_create_fee_parameters, seer_house_update_fee_parameters, account_authentication_apply_fee_parameters, seer_supervisor_create_operation_fee_parameters, seer_supervisor_update_operation_fee_parameters, seer_supervisor_process_operation_fee_parameters, seer_authenticator_create_operation_fee_parameters, seer_authenticator_update_operation_fee_parameters, seer_authenticator_process_operation_fee_parameters, asset_create_market_operation_fee_parameters]);

var fee_schedule = exports.fee_schedule = new Serializer("fee_schedule", { parameters: set(fee_parameters),
    scale: uint32 });

var void_result = exports.void_result = new Serializer("void_result");

var asset = exports.asset = new Serializer("asset", { amount: int64,
    asset_id: protocol_id_type("asset") });

var operation_result = static_variant([void_result, object_id_type, asset]);

var processed_transaction = exports.processed_transaction = new Serializer("processed_transaction", { ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65)),
    operation_results: array(operation_result) });

var signed_block = exports.signed_block = new Serializer("signed_block", { previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions),
    witness_signature: bytes(65),
    transactions: array(processed_transaction) });

var block_header = exports.block_header = new Serializer("block_header", { previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions) });

var signed_block_header = exports.signed_block_header = new Serializer("signed_block_header", { previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions),
    witness_signature: bytes(65) });

var memo_data = exports.memo_data = new Serializer("memo_data", { from: public_key,
    to: public_key,
    nonce: uint64,
    message: bytes() });

var transfer = exports.transfer = new Serializer("transfer", { fee: asset,
    from: protocol_id_type("account"),
    to: protocol_id_type("account"),
    amount: asset,
    memo: optional(memo_data),
    extensions: set(future_extensions) });

var limit_order_create = exports.limit_order_create = new Serializer("limit_order_create", { fee: asset,
    seller: protocol_id_type("account"),
    amount_to_sell: asset,
    min_to_receive: asset,
    expiration: time_point_sec,
    fill_or_kill: bool,
    extensions: set(future_extensions) });

var limit_order_cancel = exports.limit_order_cancel = new Serializer("limit_order_cancel", { fee: asset,
    fee_paying_account: protocol_id_type("account"),
    order: protocol_id_type("limit_order"),
    extensions: set(future_extensions) });

var call_order_update = exports.call_order_update = new Serializer("call_order_update", { fee: asset,
    funding_account: protocol_id_type("account"),
    delta_collateral: asset,
    delta_debt: asset,
    extensions: set(future_extensions) });

var fill_order = exports.fill_order = new Serializer("fill_order", { fee: asset,
    order_id: object_id_type,
    account_id: protocol_id_type("account"),
    pays: asset,
    receives: asset });

var authority = exports.authority = new Serializer("authority", { weight_threshold: uint32,
    account_auths: map(protocol_id_type("account"), uint16),
    key_auths: map(public_key, uint16),
    address_auths: map(address, uint16) });

var account_options = exports.account_options = new Serializer("account_options", { memo_key: public_key,
    voting_account: protocol_id_type("account"),
    num_committee: uint16,
    num_authenticator: uint16,
    num_supervisor: uint16,
    votes: set(vote_id),
    extensions: set(future_extensions) });

var account_create = exports.account_create = new Serializer("account_create", { fee: asset,
    registrar: protocol_id_type("account"),
    referrer: protocol_id_type("account"),
    referrer_percent: uint16,
    name: string,
    owner: authority,
    active: authority,
    options: account_options,
    extensions: set(future_extensions) });

var account_update = exports.account_update = new Serializer("account_update", { fee: asset,
    account: protocol_id_type("account"),
    owner: optional(authority),
    active: optional(authority),
    new_options: optional(account_options),
    extensions: set(future_extensions) });

var account_whitelist = exports.account_whitelist = new Serializer("account_whitelist", { fee: asset,
    authorizing_account: protocol_id_type("account"),
    account_to_list: protocol_id_type("account"),
    new_listing: uint8,
    extensions: set(future_extensions) });

var account_upgrade = exports.account_upgrade = new Serializer("account_upgrade", { fee: asset,
    account_to_upgrade: protocol_id_type("account"),
    upgrade_to_lifetime_member: bool,
    extensions: set(future_extensions) });

var account_transfer = exports.account_transfer = new Serializer("account_transfer", { fee: asset,
    account_id: protocol_id_type("account"),
    new_owner: protocol_id_type("account"),
    extensions: set(future_extensions) });

var price = exports.price = new Serializer("price", { base: asset,
    quote: asset });

var asset_options = exports.asset_options = new Serializer("asset_options", { max_supply: int64,
    market_fee_percent: uint16,
    max_market_fee: int64,
    issuer_permissions: uint16,
    flags: uint16,
    core_exchange_rate: price,
    whitelist_authorities: set(protocol_id_type("account")),
    blacklist_authorities: set(protocol_id_type("account")),
    whitelist_markets: set(protocol_id_type("asset")),
    blacklist_markets: set(protocol_id_type("asset")),
    description: string,
    extensions: set(future_extensions) });

var asset_create = exports.asset_create = new Serializer("asset_create", { fee: asset,
    issuer: protocol_id_type("account"),
    symbol: string,
    precision: uint8,
    common_options: asset_options,
    extensions: set(future_extensions) });

var asset_update = exports.asset_update = new Serializer("asset_update", { fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_update: protocol_id_type("asset"),
    new_issuer: optional(protocol_id_type("account")),
    new_options: asset_options,
    extensions: set(future_extensions) });

var asset_issue = exports.asset_issue = new Serializer("asset_issue", { fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_issue: asset,
    issue_to_account: protocol_id_type("account"),
    memo: optional(memo_data),
    extensions: set(future_extensions) });

var asset_reserve = exports.asset_reserve = new Serializer("asset_reserve", { fee: asset,
    payer: protocol_id_type("account"),
    amount_to_reserve: asset,
    extensions: set(future_extensions) });

var asset_fund_fee_pool = exports.asset_fund_fee_pool = new Serializer("asset_fund_fee_pool", { fee: asset,
    from_account: protocol_id_type("account"),
    asset_id: protocol_id_type("asset"),
    amount: int64,
    extensions: set(future_extensions) });

var witness_create = exports.witness_create = new Serializer("witness_create", { fee: asset,
    witness_account: protocol_id_type("account"),
    url: string,
    block_signing_key: public_key });

var witness_update = exports.witness_update = new Serializer("witness_update", { fee: asset,
    witness: protocol_id_type("witness"),
    witness_account: protocol_id_type("account"),
    new_url: optional(string),
    new_signing_key: optional(public_key) });

var op_wrapper = exports.op_wrapper = new Serializer("op_wrapper", { op: operation });

var proposal_create = exports.proposal_create = new Serializer("proposal_create", { fee: asset,
    fee_paying_account: protocol_id_type("account"),
    expiration_time: time_point_sec,
    proposed_ops: array(op_wrapper),
    review_period_seconds: optional(uint32),
    extensions: set(future_extensions) });

var proposal_update = exports.proposal_update = new Serializer("proposal_update", { fee: asset,
    fee_paying_account: protocol_id_type("account"),
    proposal: protocol_id_type("proposal"),
    active_approvals_to_add: set(protocol_id_type("account")),
    active_approvals_to_remove: set(protocol_id_type("account")),
    owner_approvals_to_add: set(protocol_id_type("account")),
    owner_approvals_to_remove: set(protocol_id_type("account")),
    key_approvals_to_add: set(public_key),
    key_approvals_to_remove: set(public_key),
    extensions: set(future_extensions) });

var proposal_delete = exports.proposal_delete = new Serializer("proposal_delete", { fee: asset,
    fee_paying_account: protocol_id_type("account"),
    using_owner_authority: bool,
    proposal: protocol_id_type("proposal"),
    extensions: set(future_extensions) });

var withdraw_permission_create = exports.withdraw_permission_create = new Serializer("withdraw_permission_create", { fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    periods_until_expiration: uint32,
    period_start_time: time_point_sec });

var withdraw_permission_update = exports.withdraw_permission_update = new Serializer("withdraw_permission_update", { fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    permission_to_update: protocol_id_type("withdraw_permission"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    period_start_time: time_point_sec,
    periods_until_expiration: uint32 });

var withdraw_permission_claim = exports.withdraw_permission_claim = new Serializer("withdraw_permission_claim", { fee: asset,
    withdraw_permission: protocol_id_type("withdraw_permission"),
    withdraw_from_account: protocol_id_type("account"),
    withdraw_to_account: protocol_id_type("account"),
    amount_to_withdraw: asset,
    memo: optional(memo_data) });

var withdraw_permission_delete = exports.withdraw_permission_delete = new Serializer("withdraw_permission_delete", { fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_permission: protocol_id_type("withdraw_permission") });

var committee_member_create = exports.committee_member_create = new Serializer("committee_member_create", { fee: asset,
    committee_member_account: protocol_id_type("account"),
    url: string });

var committee_member_update = exports.committee_member_update = new Serializer("committee_member_update", { fee: asset,
    committee_member: protocol_id_type("committee_member"),
    committee_member_account: protocol_id_type("account"),
    new_url: optional(string) });

var chain_parameters = exports.chain_parameters = new Serializer("chain_parameters", { current_fees: fee_schedule,
    block_interval: uint8,
    maintenance_interval: uint32,
    maintenance_skip_slots: uint8,
    committee_proposal_review_period: uint32,
    maximum_transaction_size: uint32,
    maximum_block_size: uint32,
    maximum_time_until_expiration: uint32,
    maximum_proposal_lifetime: uint32,
    maximum_asset_whitelist_authorities: uint8,
    maximum_authenticator_count: uint16,
    maximum_committee_count: uint16,
    maximum_authority_membership: uint16,
    network_percent_of_fee: uint16,
    lifetime_referrer_percent_of_fee: uint16,
    cashback_vesting_period_seconds: uint32,
    cashback_vesting_threshold: int64,
    count_non_member_votes: bool,
    allow_non_member_whitelists: bool,
    witness_pay_per_block: int64,
    witness_pay_vesting_seconds: uint32,
    max_predicate_opcode: uint16,
    fee_liquidation_threshold: int64,
    accounts_per_fee_scale: uint16,
    account_fee_scale_bitshifts: uint8,
    max_authority_depth: uint8,
    min_guaranty_per_room: int64,
    max_oracle_reward: int64,
    fixed_witness_count: uint16,
    maximum_profit_witness_count: uint16,
    maximun_seer_settles_per_block: uint32,
    supported_authenticate_types: uint16,
    extensions: set(future_extensions) });

var committee_member_update_global_parameters = exports.committee_member_update_global_parameters = new Serializer("committee_member_update_global_parameters", { fee: asset,
    new_parameters: chain_parameters });

var linear_vesting_policy_initializer = exports.linear_vesting_policy_initializer = new Serializer("linear_vesting_policy_initializer", { begin_timestamp: time_point_sec,
    vesting_cliff_seconds: uint32,
    vesting_duration_seconds: uint32 });

var cdd_vesting_policy_initializer = exports.cdd_vesting_policy_initializer = new Serializer("cdd_vesting_policy_initializer", { start_claim: time_point_sec,
    vesting_seconds: uint32 });

var vesting_policy_initializer = static_variant([linear_vesting_policy_initializer, cdd_vesting_policy_initializer]);

var vesting_balance_create = exports.vesting_balance_create = new Serializer("vesting_balance_create", { fee: asset,
    creator: protocol_id_type("account"),
    owner: protocol_id_type("account"),
    amount: asset,
    policy: vesting_policy_initializer });

var vesting_balance_withdraw = exports.vesting_balance_withdraw = new Serializer("vesting_balance_withdraw", { fee: asset,
    vesting_balance: protocol_id_type("vesting_balance"),
    owner: protocol_id_type("account"),
    amount: asset });

var custom = exports.custom = new Serializer("custom", { fee: asset,
    payer: protocol_id_type("account"),
    required_auths: set(protocol_id_type("account")),
    id: uint16,
    data: bytes() });

var account_name_eq_lit_predicate = exports.account_name_eq_lit_predicate = new Serializer("account_name_eq_lit_predicate", { account_id: protocol_id_type("account"),
    name: string });

var asset_symbol_eq_lit_predicate = exports.asset_symbol_eq_lit_predicate = new Serializer("asset_symbol_eq_lit_predicate", { asset_id: protocol_id_type("asset"),
    symbol: string });

var block_id_predicate = exports.block_id_predicate = new Serializer("block_id_predicate", { id: bytes(20) });

var predicate = static_variant([account_name_eq_lit_predicate, asset_symbol_eq_lit_predicate, block_id_predicate]);

var assert = exports.assert = new Serializer("assert", { fee: asset,
    fee_paying_account: protocol_id_type("account"),
    predicates: array(predicate),
    required_auths: set(protocol_id_type("account")),
    extensions: set(future_extensions) });

var balance_claim = exports.balance_claim = new Serializer("balance_claim", { fee: asset,
    deposit_to_account: protocol_id_type("account"),
    balance_to_claim: protocol_id_type("balance"),
    balance_owner_key: public_key,
    total_claimed: asset });

var override_transfer = exports.override_transfer = new Serializer("override_transfer", { fee: asset,
    issuer: protocol_id_type("account"),
    from: protocol_id_type("account"),
    to: protocol_id_type("account"),
    amount: asset,
    memo: optional(memo_data),
    extensions: set(future_extensions) });

var stealth_confirmation = exports.stealth_confirmation = new Serializer("stealth_confirmation", { one_time_key: public_key,
    to: optional(public_key),
    encrypted_memo: bytes() });

var blind_output = exports.blind_output = new Serializer("blind_output", { commitment: bytes(33),
    range_proof: bytes(),
    owner: authority,
    stealth_memo: optional(stealth_confirmation) });

var transfer_to_blind = exports.transfer_to_blind = new Serializer("transfer_to_blind", { fee: asset,
    amount: asset,
    from: protocol_id_type("account"),
    blinding_factor: bytes(32),
    outputs: array(blind_output) });

var blind_input = exports.blind_input = new Serializer("blind_input", { commitment: bytes(33),
    owner: authority });

var blind_transfer = exports.blind_transfer = new Serializer("blind_transfer", { fee: asset,
    inputs: array(blind_input),
    outputs: array(blind_output) });

var transfer_from_blind = exports.transfer_from_blind = new Serializer("transfer_from_blind", { fee: asset,
    amount: asset,
    to: protocol_id_type("account"),
    blinding_factor: bytes(32),
    inputs: array(blind_input) });

var asset_claim_fees = exports.asset_claim_fees = new Serializer("asset_claim_fees", { fee: asset,
    issuer: protocol_id_type("account"),
    amount_to_claim: asset,
    extensions: set(future_extensions) });

var witness_create_collateral = exports.witness_create_collateral = new Serializer("witness_create_collateral", { fee: asset,
    witness: protocol_id_type("witness"),
    witness_account: protocol_id_type("account"),
    amount: int64 });

var witness_cancel_collateral = exports.witness_cancel_collateral = new Serializer("witness_cancel_collateral", { fee: asset,
    witness: protocol_id_type("witness"),
    witness_account: protocol_id_type("account"),
    collateral_id: object_id_type });

var witness_claim_collateral = exports.witness_claim_collateral = new Serializer("witness_claim_collateral", { fee: asset,
    witness: protocol_id_type("witness"),
    witness_account: protocol_id_type("account"),
    collateral_id: optional(object_id_type) });

var oracle_create = exports.oracle_create = new Serializer("oracle_create", { fee: asset,
    issuer: protocol_id_type("account"),
    guaranty: int64,
    description: string,
    script: string });

var oracle_update = exports.oracle_update = new Serializer("oracle_update", { fee: asset,
    issuer: protocol_id_type("account"),
    oracle: protocol_id_type("oracle"),
    guaranty: int64,
    description: optional(string),
    script: optional(string)
});

var oracle_input = exports.oracle_input = new Serializer("oracle_input", { fee: asset,
    issuer: protocol_id_type("account"),
    oracle: protocol_id_type("oracle"),
    room: protocol_id_type("room"),
    input: array(uint8)
});

var seer_oracle_filter = exports.seer_oracle_filter = new Serializer("seer_oracle_filter", { reputation: uint64,
    guaranty: uint64,
    volume: uint64 });

var room_option = exports.room_option = new Serializer("room_option", { result_owner_percent: uint32,
    reward_per_oracle: int64,
    accept_asset: protocol_id_type("asset"),
    minimum: int64,
    maximum: int64,
    start: time_point_sec,
    stop: time_point_sec,
    input_duration_secs: uint32,
    filter: optional(seer_oracle_filter),
    allowed_oracles: set(protocol_id_type("oracle")),
    allowed_countries: set(uint16),
    allowed_authentications: map(protocol_id_type("authenticator"), set(uint16)) });

var lmsr_special_option = exports.lmsr_special_option = new Serializer("lmsr_special_option", {
    L: int64 });

var advanced_special_option = exports.advanced_special_option = new Serializer("advanced_special_option", {
    pool: int64,
    awards: array(uint64)
});

var seer_room_initial_option = exports.seer_room_initial_option = new Serializer("seer_room_initial_option", {
    room_type: uint8,
    selection_description: array(string),
    range: uint8,
    lmsr: optional(lmsr_special_option),
    advanced: optional(advanced_special_option)
});

var single_participate = exports.single_participate = new Serializer("single_participate", { player: protocol_id_type("account"),
    amount: int64,
    input: array(uint8) });

var multi_participate = exports.multi_participate = new Serializer("multi_participate", { player: protocol_id_type("account"),
    amount: int64,
    input: array(set(uint8)) });

var multi_participate2 = exports.multi_participate2 = new Serializer("multi_participate2", { player: protocol_id_type("account"),
    amount: int64,
    input: array(array(uint8)) });

var index = exports.index = new Serializer("index", { v1: uint32,
    v2: uint32 });

var index3 = exports.index3 = new Serializer("index3", { v1: int64,
    v2: int64,
    v3: int64 });

var result_of_win = exports.result_of_win = new Serializer("result_of_win", { total_amount: int64,
    reward_percent: uint64,
    settle_finished: bytes(3),
    settled_index: index3,
    index0: array(uint32),
    index1: array(index),
    index2: array(index) });

var seer_room_option_type3_history = exports.seer_room_option_type3_history = new Serializer("seer_room_option_type3_history", { description: string,
    owner_result: array(uint8),
    final_result: array(uint8),
    oracle_sets: map(protocol_id_type("oracle"), array(uint8)),
    pool: int64,
    total_shares: int64,
    total_participate: map(array(uint8), int64) });

var seer_room_option_type3 = exports.seer_room_option_type3 = new Serializer("seer_room_option_type3", { selection_description: array(string),
    sub_selection_description: array(array(string)),
    pool: int64,
    pool_percent_reward: uint16,
    last_claim_time: time_point_sec,
    total_shares: int64,
    range: array(uint8),
    depth: array(uint8),
    total_depth: uint8,
    awards: map(array(uint8), uint32),
    advanced_awards: map(array(uint8), array(uint32)),
    participators0: array(single_participate),
    participators1: array(multi_participate),
    participators2: array(multi_participate2),
    finalized_index0: int64,
    finalized_index1: int64,
    finalized_index2: int64,
    winners: map(array(uint8), result_of_win),
    settled_balance: int64,
    settled_index: int64,
    histories: array(seer_room_option_type3_history) });

var seer_room_create = exports.seer_room_create = new Serializer("seer_room_create", { fee: asset,
    issuer: protocol_id_type("account"),
    label: set(string),
    description: string,
    script: string,
    room_type: uint8,
    option: room_option,
    initial_option: optional(seer_room_initial_option),
    room_type3: optional(uint8),
    extensions: set(future_extensions)
});

var seer_room_update = exports.seer_room_update = new Serializer("seer_room_update", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room"),
    description: optional(string),
    script: optional(string),
    option: optional(room_option),
    new_awards: optional(array(uint64)),
    initial_option: optional(seer_room_initial_option),
    room_type3: optional(uint8),
    extensions: set(future_extensions)
});

var seer_room_participate = exports.seer_room_participate = new Serializer("seer_room_participate", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room"),
    type: uint8,
    input: array(uint8),
    input1: array(set(uint8)),
    input2: array(array(uint8)),
    amount: int64 });

var seer_room_open = exports.seer_room_open = new Serializer("seer_room_open", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room"),
    start: time_point_sec,
    stop: time_point_sec,
    input_duration_secs: uint32 });

var seer_room_stop_participating = exports.seer_room_stop_participating = new Serializer("seer_room_stop_participating", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room"),
    input_duration_secs: uint32 });

var seer_room_close = exports.seer_room_close = new Serializer("seer_room_close", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room"),
    remove: bool });

var seer_room_final = exports.seer_room_final = new Serializer("seer_room_final", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room") });

var seer_room_settle = exports.seer_room_settle = new Serializer("seer_room_settle", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room") });

var seer_room_input = exports.seer_room_input = new Serializer("seer_room_input", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room"),
    input: array(uint8) });

var seer_room_claim = exports.seer_room_claim = new Serializer("seer_room_claim", { fee: asset,
    issuer: protocol_id_type("account"),
    room: protocol_id_type("room"),
    amount: asset });

var seer_house_create = exports.seer_house_create = new Serializer("seer_house_create", { fee: asset,
    issuer: protocol_id_type("account"),
    guaranty: int64,
    description: string,
    script: string });

var seer_house_update = exports.seer_house_update = new Serializer("seer_house_update", { fee: asset,
    issuer: protocol_id_type("account"),
    house: protocol_id_type("house"),
    guaranty: int64,
    claim_fees: int64,
    description: optional(string),
    script: optional(string) });

var account_authentication_apply = exports.account_authentication_apply = new Serializer("account_authentication_apply", { fee: asset,
    account_id: protocol_id_type("account"),
    authenticator: protocol_id_type("authenticator"),
    authentication_type: uint16,
    country: uint16,
    extensions: set(future_extensions) });

var seer_supervisor_create = exports.seer_supervisor_create = new Serializer("seer_supervisor_create", { fee: asset,
    issuer: protocol_id_type("account"),
    country: uint16,
    description: string,
    script: string });

var seer_supervisor_update = exports.seer_supervisor_update = new Serializer("seer_supervisor_update", { fee: asset,
    issuer: protocol_id_type("account"),
    supervisor: protocol_id_type("supervisor"),
    description: optional(string),
    script: optional(string) });

var seer_supervisor_process = exports.seer_supervisor_process = new Serializer("seer_supervisor_process", { fee: asset,
    issuer: protocol_id_type("account"),
    supervisor: protocol_id_type("supervisor"),
    target: protocol_id_type("account"),
    code: uint16 });

var seer_authenticator_create = exports.seer_authenticator_create = new Serializer("seer_authenticator_create", { fee: asset,
    issuer: protocol_id_type("account"),
    description: string,
    script: string });

var seer_authenticator_update = exports.seer_authenticator_update = new Serializer("seer_authenticator_update", { fee: asset,
    issuer: protocol_id_type("account"),
    authenticator: protocol_id_type("authenticator"),
    description: optional(string),
    script: optional(string) });

var seer_authenticator_process = exports.seer_authenticator_process = new Serializer("seer_authenticator_process", { fee: asset,
    issuer: protocol_id_type("account"),
    authenticator: protocol_id_type("authenticator"),
    item: protocol_id_type("seer_authentication_item"),
    pass: bool });

operation.st_operations = [transfer, limit_order_create, limit_order_cancel, fill_order, account_create, account_update, account_whitelist, account_upgrade, account_transfer, asset_create, asset_update, asset_issue, asset_reserve, asset_fund_fee_pool, witness_create, witness_update, witness_create_collateral, witness_cancel_collateral, witness_claim_collateral, proposal_create, proposal_update, proposal_delete, withdraw_permission_create, withdraw_permission_update, withdraw_permission_claim, withdraw_permission_delete, committee_member_create, committee_member_update, committee_member_update_global_parameters, vesting_balance_create, vesting_balance_withdraw, custom, assert, balance_claim, override_transfer, transfer_to_blind, blind_transfer, transfer_from_blind, asset_claim_fees, asset_claim_fees, oracle_create, oracle_update, oracle_input, seer_room_create, seer_room_update, seer_room_input, seer_room_open, seer_room_stop_participating, seer_room_final, seer_room_settle, seer_room_participate, seer_room_close, seer_room_claim, seer_house_create, seer_house_update, account_authentication_apply, seer_supervisor_create, seer_supervisor_update, seer_supervisor_process, seer_authenticator_create, seer_authenticator_update, seer_authenticator_process];

var transaction = exports.transaction = new Serializer("transaction", { ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions) });

var signed_transaction = exports.signed_transaction = new Serializer("signed_transaction", { ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65)) });
//# -------------------------------
//#  Generated code end
//# -------------------------------

// Custom Types

var stealth_memo_data = exports.stealth_memo_data = new Serializer("stealth_memo_data", {
    from: optional(public_key),
    amount: asset,
    blinding_factor: bytes(32),
    commitment: bytes(33),
    check: uint32
});
// const stealth_confirmation = new Serializer(
//     "stealth_confirmation", {
//     one_time_key: public_key,
//     to: optional( public_key ),
//     encrypted_memo: stealth_memo_data
// })