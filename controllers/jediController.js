import {
    getAllJedis,
    getJediById,
    createJedi,
    updateJedi,
    deleteJedi
} from '../services/jediService.js';

export const getJedis = (req, res) => {
    res.send(getAllJedis());
};

export const getJedi = (req, res) => {
    const jedi = getJediById(parseInt(req.params.id));
    if (!jedi) return res.status(404).send('Jedi not found');
    res.send(jedi);
};

export const addJedi = (req, res) => {
    const newJedi = createJedi(req.body);
    res.status(201).send(newJedi);
};

export const editJedi = (req, res) => {
    const updatedJedi = updateJedi(parseInt(req.params.id), req.body.name);
    if (!updatedJedi) return res.status(404).send('Jedi not found');
    res.send(updatedJedi);
};

export const removeJedi = (req, res) => {
    const removedJedi = deleteJedi(parseInt(req.params.id));
    if (!removedJedi) return res.status(404).send('Jedi not found');
    res.send(removedJedi);
};
