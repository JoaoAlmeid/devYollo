import * as Yup from "yup";
import AppError from "../../errors/AppError";
import Campaign from "../../models/Campaign";
import ContactList from "../../models/ContactList";
import Whatsapp from "../../models/Whatsapp";

interface Data { 
  name: string;
  status: string;
  confirmation: boolean;
  scheduledAt: string;
  companyId: number;
  contactListId: number;
  message1?: string;
  message2?: string;
  message3?: string;
  message4?: string;
  message5?: string;
  confirmationMessage1?: string;
  confirmationMessage2?: string;
  confirmationMessage3?: string;
  confirmationMessage4?: string;
  confirmationMessage5?: string;
}

const CreateService = async (data: Data): Promise<Campaign> => {
  const { name, scheduledAt } = data;

  const ticketnoteSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "ERR_CAMPAIGN_INVALID_NAME")
      .required("ERR_CAMPAIGN_REQUIRED")
  });

  try {
    await ticketnoteSchema.validate({ name });
  } catch (err: any) {
    throw new AppError(err.message, err.statusCode);
  }

  if (scheduledAt != null && scheduledAt != "") {
    data.status = "PROGRAMADA";
  }

  const record = await Campaign.create({
    name: data.name,
    status: data.status,
    confirmation: data.confirmation,
    scheduledAt: data.scheduledAt,
    companyId: data.companyId,
    contactListId: data.contactListId,
    message1: data.message1,
    message2: data.message2,
    message3: data.message3,
    message4: data.message4,
    message5: data.message5,
    confirmationMessage1: data.confirmationMessage1,
    confirmationMessage2: data.confirmationMessage2,
    confirmationMessage3: data.confirmationMessage3,
    confirmationMessage4: data.confirmationMessage4,
    confirmationMessage5: data.confirmationMessage5,
  });

  await record.reload({
    include: [
      { model: ContactList },
      { model: Whatsapp, attributes: ["id", "name"] }
    ]
  });

  return record;
};

export default CreateService;
