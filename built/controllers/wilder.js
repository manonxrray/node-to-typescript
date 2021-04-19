"use strict";
const Wilder = require("../models/Wilder");
module.exports = {
    create: async (req, res, next) => {
        async function runAsync() {
            await Wilder.init();
            const wilder = new Wilder(req.body);
            const result = await wilder.save();
            res.json({ success: true, result });
        }
        runAsync().catch(next);
    },
    delete: async (req, res, next) => {
        async function runAsync() {
            await Wilder.deleteOne({ _id: req.body.id }, req.body);
            res.json({ success: true });
        }
        runAsync().catch(next);
    },
    update: async (req, res, next) => {
        async function runAsync() {
            await Wilder.update({ _id: req.body.id }, req.body);
            const result = await wilder.save();
            res.json({ success: true, result });
        }
        runAsync().catch(next);
    },
    read: async (req, res, next) => {
        async function runAsync() {
            const result = await Wilder.find();
            res.json({ success: true, result });
        }
        runAsync().catch(next);
    },
};
//# sourceMappingURL=wilder.js.map