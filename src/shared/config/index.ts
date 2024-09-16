import { z } from "zod";

export const BACKEND_URL = z.string().parse(process.env.BACKEND_URL)