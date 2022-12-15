import { PrismaClient, User } from '@prisma/client';
import express, { json, Response } from 'express';

const app = express();
app.use(json());

const prisma = new PrismaClient();

app.get('/', (_, res: Response) => {
	res.json({ hello: 'world' });
});

app.get('/prisma', async (_, res: Response) => {
	const user: User = await prisma.user.create({
		data: {
			email: 'random@example.com',
		},
	});

	res.json({ user });
});

app.use((_, res: Response) => {
	res.status(404).json({ error: 'NOT FOUND' });
});

export default app;
