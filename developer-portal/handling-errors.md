---
title: Handling Errors
---

# Handling Errors

### Inventory
    - Add / Update Inventory
        - error_code: store_not_found | error_message: Store not found
        - error_code: invalid_inventories | error_message: There is no inventories to be updated
        - error_code: variant_not_found | error_message: Cannot find variant with code {variant.code}

    - Update Out of Stock Inventory
        - error_message: Store is inactive
        - error_code: invalid_code | error_message: {code} is not a valid variant in store {store.code}

    - Add / Update Inventory Settings
        - error_code: inventory_not_found | error_message: Can't find variant {variant_code} in store {self.store.name}

### Group
    - Add / Update Group
        - error_code: group_assignment_error | error_message: Invalid Group assignment: {parent}
        - error_code: parent_not_found | error_message: Parent group not found

    - Add / Update Inventory Settings
        - error_code: duplicate_aggregator_setting | error_message: Duplicate aggregator settings: {AggregatorType(aggregator_setting["type"]).label} settings for group {aggregator_setting["group"]} already exists in this request
        - error_code: invalid_aggregator_settings | error_message: Field 'aggregator_setting' is not a valid JSON array

### Order
    - Get Order
        - error_code: rate_limit_exceeded | error_message: Please wait for a few minutes and try again

    - Get Order Details
        - error_code: ? | error_message: ?

    - Paid Order
        - error_code: invalid_order_number | error_message: Order not found 
        - error_code: already_paid | error_message: Order already paid

    - Complete Order
        - error_code: invalid_order_number | error_message: Order not found
        - error_code: order_already_completed | error_message: Order already completed
        - error_code: order_already_canceled | error_message: Order already canceled

    - Confirm Order
        - error_code: invalid_order_number | error_message: Order not found
        - error_code: invalid_status | error_message: Order has been {order.get_status_display().lower()}

    - Cancel Order
        - error_code: invalid_order_number | error_message: Order not found
        - error_code: order_already_canceled | error_message: Order already canceled

    - Add Order
        - error_code: has_invalid_items | error_message: Sorry, the following item(s) are not available
        - error_code: aquisition_error | error_message: Please wait for a few seconds and try again

### Product and Variant
    - Add / Update Product & Variant
        - error_code: ? | error_message: ?

    - Add / Update Variant Aggregator Settings
        - error_code: duplicate_aggregator_setting | error_message: Duplicate aggregator settings: {AggregatorType(aggregator_setting["type"]).label} settings for group {aggregator_setting["group"]} already exists in this request
        - error_message: Variant {variant_code} not found, please try again
        
    - Add / Update Variant Group
        - error_code: invalid_extra_data_format | error_message: "extra data" must be a JSON dictionary ({})
        - error_code: invalid_dimension_format | error_message: "dimension" must be a JSON dictionary ({})
        - error_code: invalid_dimension_format | error_message: "dimension.{key}" is an invalid field
        - error_code: invalid_dimension_format | error_message: "dimension.{key}" must be a float or integer

### Modifier
    - Add / Update Modifier Aggregator Settings
        - error_code: invalid_type | error_message: Invalid Type
        - error_code: invalid_aggregator_settings | error_message: Invalid aggregator settings format (expected JSON Array)
        - error_code: duplicate_aggregator_setting | error_message: Duplicate aggregator settings: {AggregatorType(aggregator_setting["type"]).label} settings for group {aggregator_setting["group"]} already exists in this request
        - error_code: modifier_group_not_found | error_message: Can't find modifier group {",".join(invalid_modifier_group_code)} in merchant '{merchant.name}'