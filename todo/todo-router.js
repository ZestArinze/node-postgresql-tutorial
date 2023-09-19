import { Router } from "express";
import todoRepository from "./todo-repository";

const router = Router();

router.post('/', async (req, res) => {
    const result = await todoRepository.create(req.body);

    res.status(201).json(result)
})

router.get('/', async (req, res) => {
    const result = await todoRepository.findAll();

    res.json(result)
})

router.get('/:id', async (req, res) => {
    const result = await todoRepository.findOne(+req.params.id);

    res.json(result)
})

router.put('/:id', async (req, res) => {
    const result = await todoRepository.updateOne(+req.params.id, req.body);

    res.json(result)
})

router.delete('/:id', async (req, res) => {
    const result = await todoRepository.deleteOne(+req.params.id);

    res.json(result)
})

export default router;