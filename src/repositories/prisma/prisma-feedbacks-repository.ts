import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
   async create({ type, commet, screenshot}: FeedbackCreateData)  {
       await prisma.feedback.create({
           data:{
               type,
               commet,
               screenshot,
           }
       })
   }
}