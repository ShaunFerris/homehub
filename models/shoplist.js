import { Schema, model, models } from 'mongoose';

const ShoplistSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        required: true
    }
});

const ShoplistItem = models.ShoplistItem ||
    model("ShoplistItem", ShoplistSchema);

export default ShoplistItem;