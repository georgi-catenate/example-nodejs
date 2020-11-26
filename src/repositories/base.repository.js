const getBaseRepository = (collection) => {
    const findAll = async (options = {}) => collection.findAll(options);

    const findOne = async (options = {}) => collection.findOne(options);

    const findById = async (id, options = {}) => collection.findByPk(id, options);

    const bulkCreate = async (records = [], options = {}) =>
        collection.bulkCreate(records, options);

    const create = async (record, options = {}) => collection.create(record, options);

    const update = async (record, options = {}) => collection.update(record, options);

    const destroy = async (options = {}) => collection.destroy(options);

    return {
        findOne,
        findById,
        findAll,
        create,
        bulkCreate,
        update,
        destroy,
    };
};

module.exports = getBaseRepository;
