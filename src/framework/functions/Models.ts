import { models } from '~/database/Orm'

export function applyForeignKeys() {
    // Members
    models.member.hasOne(models.personal_account, { foreignKey: 'member_id' })

    // Users
    models.member.hasOne(models.user, { foreignKey: 'id' })
    models.group.hasOne(models.user, { foreignKey: 'group_id' })

    // Transactions
    models.transaction_category.hasMany(models.transaction, { foreignKey: 'category_id' })
    models.accounting_account.hasMany(models.transaction, { foreignKey: 'source' })
    models.accounting_account.hasMany(models.transaction, { foreignKey: 'target' })
    models.user.hasMany(models.transaction, { foreignKey: 'user_id' })
    models.personal_account.hasMany(models.personal_transaction, { foreignKey: 'account_id' })
    models.sale.hasMany(models.personal_transaction, { foreignKey: 'sale_code' })
    models.transaction_category.hasMany(models.periodic_transaction, { foreignKey: 'category_id' })
    models.accounting_account.hasMany(models.periodic_transaction, { foreignKey: 'source' })
    models.accounting_account.hasMany(models.periodic_transaction, { foreignKey: 'target' })
    models.correction_type.hasMany(models.transaction_correction, { foreignKey: 'type_id' })
    models.transaction.hasMany(models.transaction_correction, { foreignKey: 'transaction_code' })
    models.transaction_correction.hasOne(models.transaction, { foreignKey: 'correction_id' })

    // Sales
    models.user.hasMany(models.sale, { foreignKey: 'author_id' })
    models.sale_type.hasMany(models.sale, { foreignKey: 'type_id' })

    // Products
    models.product_category.hasMany(models.product, { foreignKey: 'category_id' })
    models.picture.hasMany(models.product, { foreignKey: 'picture_id' })
    models.refill.hasMany(models.product_movement, { foreignKey: 'operation_code' })
    models.sale.hasMany(models.product_movement, { foreignKey: 'operation_code' })
    models.stock_correction.hasMany(models.product_movement, { foreignKey: 'operation_code' })
    models.product.hasMany(models.product_movement, { foreignKey: 'product_id' })

    // Permissions
    models.permission.belongsToMany(models.group, { through: 'authorization', foreignKey: 'permission_id' })
    models.group.belongsToMany(models.permission, { through: 'authorization', foreignKey: 'group_id' })

    // Stocks
    models.refill.hasOne(models.stock_correction, { foreignKey: 'transaction_code' })
    models.stock_correction.hasOne(models.refill, { foreignKey: 'transaction_code' })

    // Pictures
    models.picture_type.hasMany(models.picture, { foreignKey: 'type' })

}