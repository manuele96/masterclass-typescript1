import { Request, Response } from "express";
import EmailService from "../services/EmailService";
const users = [{ name: "Manuel Miranda", email: "manuel@rosaacademic.com" }];
export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "Manuel Miranda", email: "manuel@rosaacademic.com" },
      message: { subject: "Bem-vindo ao sistema", body: "Seja bem vindo" },
    });
    res.send();
  },
};
