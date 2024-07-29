let jedis = [
    { id: 1, name: 'Luke Skywalker' },
    { id: 2, name: 'Obi-Wan Kenobi' },
    { id: 3, name: 'Yoda' }
];

export const getAllJedis = () => jedis;

export const getJediById = (id) => jedis.find(jedi => jedi.id === id);

export const createJedi = (jedi) => {
    const newJedi = { id: jedis.length + 1, ...jedi };
    jedis.push(newJedi);
    return newJedi;
};

export const updateJedi = (id, name) => {
    const jedi = jedis.find(jedi => jedi.id === id);
    if (jedi) {
        jedi.name = name;
        return jedi;
    }
    return null;
};

export const deleteJedi = (id) => {
    const jediIndex = jedis.findIndex(jedi => jedi.id === id);
    if (jediIndex !== -1) {
        const removedJedi = jedis.splice(jediIndex, 1);
        return removedJedi[0];
    }
    return null;
};