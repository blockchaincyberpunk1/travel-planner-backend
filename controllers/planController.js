const Plan = require('../models/Plan');

exports.createPlan = async (req, res) => {
    try {
        const newPlan = new Plan(req.body);
        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) return res.status(404).json({ message: 'Plan not found' });
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePlan = async (req, res) => {
    try {
        const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePlan = async (req, res) => {
    try {
        const plan = await Plan.findByIdAndDelete(req.params.id);
        if (!plan) return res.status(404).json({ message: 'Plan not found' });
        res.status(200).json({ message: 'Plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
