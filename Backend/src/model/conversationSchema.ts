import mongoose, { Document, Schema } from 'mongoose';
import { IConversation } from '../Types/interface';

interface ConversationDocument extends IConversation, Document {}

const conversationSchema = new Schema<ConversationDocument>({
    members: {
        type: [String],
        required: true,
    },
},
{
    timestamps: true,
},);

const conversationModel = mongoose.model<IConversation>('conversation', conversationSchema);
export default conversationModel;
