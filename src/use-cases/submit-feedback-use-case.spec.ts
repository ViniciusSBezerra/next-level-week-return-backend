import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => { } },
    { sendMail: async () => { } }
)


describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {


        await expect(submitFeedback.execute({
            type: "bug",
            commet: "example commet",
            screenshot: "data:image/png;base64,nosngobnsdognszvçbdsgd"
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it("should not be able to submit a feedback without type", async () => {


        await expect(submitFeedback.execute({
            type: "",
            commet: "example commet",
            screenshot: "data:image/png;base64,nosngobnsdognszvçbdsgd"
        })).rejects.toThrow();
    });

    it("should not be able to submit a feedback without commet", async () => {


        await expect(submitFeedback.execute({
            type: "type",
            commet: "",
            screenshot: "data:image/png;base64,nosngobnsdognszvçbdsgd"
        })).rejects.toThrow();
    });

    it("should not be able to submit a feedback with an invalid screenshot", async () => {
        await expect(submitFeedback.execute({
            type: "type",
            commet: "teste",
            screenshot: "image png",
        })).rejects.toThrow();
    });
});