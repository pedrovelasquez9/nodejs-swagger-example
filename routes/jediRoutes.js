import express from 'express';
import {
    getJedis,
    getJedi,
    addJedi,
    editJedi,
    removeJedi
} from '../controllers/jediController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Jedi:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Jedi
 *         name:
 *           type: string
 *           description: The name of the Jedi
 *       example:
 *         id: 1
 *         name: Luke Skywalker
 */

/**
 * @swagger
 * tags:
 *   name: Jedis
 *   description: The Jedis managing API
 */

/**
 * @swagger
 * /jedis:
 *   get:
 *     summary: Returns the list of all the Jedis
 *     tags: [Jedis]
 *     responses:
 *       200:
 *         description: The list of the Jedis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jedi'
 */

router.get('/jedis', getJedis);

/**
 * @swagger
 * /jedis/{id}:
 *   get:
 *     summary: Get a Jedi by id
 *     tags: [Jedis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Jedi id
 *     responses:
 *       200:
 *         description: The Jedi description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jedi'
 *       404:
 *         description: The Jedi was not found
 */
router.get('/jedis/:id', getJedi);

/**
 * @swagger
 * /jedis:
 *   post:
 *     summary: Create a new Jedi
 *     tags: [Jedis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jedi'
 *     responses:
 *       201:
 *         description: The Jedi was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jedi'
 *       500:
 *         description: Some server error
 */
router.post('/jedis', addJedi);

/**
 * @swagger
 * /jedis/{id}:
 *   put:
 *     summary: Update a Jedi by the id
 *     tags: [Jedis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Jedi id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Jedi'
 *     responses:
 *       200:
 *         description: The Jedi was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jedi'
 *       404:
 *         description: The Jedi was not found
 *       500:
 *         description: Some error happened
 */
router.put('/jedis/:id', editJedi);

/**
 * @swagger
 * /jedis/{id}:
 *   delete:
 *     summary: Remove the Jedi by id
 *     tags: [Jedis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Jedi id
 *     responses:
 *       200:
 *         description: The Jedi was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jedi'
 *       404:
 *         description: The Jedi was not found
 */
router.delete('/jedis/:id', removeJedi);
export default router;
