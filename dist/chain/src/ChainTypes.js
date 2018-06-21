"use strict";

exports.__esModule = true;
var ChainTypes = {};

ChainTypes.reserved_spaces = {
    relative_protocol_ids: 0,
    protocol_ids: 1,
    implementation_ids: 2
};

ChainTypes.object_type = {
    "null": 0,
    base: 1,
    account: 2,
    asset: 3,
    committee_member: 4,
    witness: 5,
    limit_order: 6,
    //call_order: 8,
    custom: 7,
    proposal: 8,
    operation_history: 9,
    withdraw_permission: 10,
    vesting_balance: 11,
    //worker: 14,
    balance: 12,
    oracle: 13,
    house: 14,
    room: 15,
    supervisor: 16,
    authenticator: 17
};

ChainTypes.impl_object_type = {
    global_property: 0,
    dynamic_global_property: 1,
    index_meta: 2,
    asset_dynamic_data: 3,
    account_balance: 4,
    account_statistics: 5,
    transaction: 6,
    block_summary: 7,
    account_transaction_history: 8,
    blinded_balance: 9,
    chain_property: 10,
    witness_schedule: 11,
    budget_record: 12,
    special_authority: 13,
    buyback: 14,
    fba_accumulator: 15,
    witness_collateral: 16,
    seer_authentication_item: 17
};

ChainTypes.vote_type = {
    committee: 0,
    supervisor: 1,
    authenticator: 2
};

ChainTypes.operations = {
    transfer: 0,
    limit_order_create: 1,
    limit_order_cancel: 2,
    fill_order: 3,
    account_create: 4,
    account_update: 5,
    account_whitelist: 6,
    account_upgrade: 7,
    account_transfer: 8,
    asset_create: 9,
    asset_update: 10,
    asset_issue: 11,
    asset_reserve: 12,
    asset_fund_fee_pool: 13,
    witness_create: 14,
    witness_update: 15,
    witness_create_collateral: 16,
    witness_cancel_collateral: 17,
    witness_claim_collateral: 18,
    proposal_create: 19,
    proposal_update: 20,
    proposal_delete: 21,
    withdraw_permission_create: 22,
    withdraw_permission_update: 23,
    withdraw_permission_claim: 24,
    withdraw_permission_delete: 25,
    committee_member_create: 26,
    committee_member_update: 27,
    committee_member_update_global_parameters: 28,
    vesting_balance_create: 29,
    vesting_balance_withdraw: 30,
    custom: 31,
    assert: 32,
    balance_claim: 33,
    override_transfer: 34,
    transfer_to_blind: 35,
    blind_transfer: 36,
    transfer_from_blind: 37,
    asset_claim_fees: 38,
    fba_distribute: 39,
    oracle_create: 40,
    oracle_update: 41,
    oracle_input: 42,
    seer_room_create: 43,
    seer_room_update: 44,
    seer_room_input: 45,
    seer_room_open: 46,
    seer_room_stop_participating: 47,
    seer_room_final: 48,
    seer_room_settle: 49,
    seer_room_participate: 50,
    seer_room_close: 51,
    seer_room_claim: 52,
    seer_house_create: 53,
    seer_house_update: 54,
    account_authentication_apply: 55,
    seer_supervisor_create: 56,
    seer_supervisor_update: 57,
    seer_supervisor_process: 58,
    seer_authenticator_create: 50,
    seer_authenticator_update: 60,
    seer_authenticator_process: 61,
    asset_create_market: 62
};

exports.default = ChainTypes;
module.exports = exports["default"];