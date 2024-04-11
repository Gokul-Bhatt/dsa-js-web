const {z} = require("zod");

const singupSchema = z.object({
    username: z
    .string({require_error: "name is required"})
    .trim()
    .min(3, {message: "name must be at lest of 3 chars."})
    .max(255, {message: "name must not be more than 255 characters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email "})
    .min(3, {message: "email must be at lest of 3 chars."})
    .max(255, {message: "email must not be more than 255 characters"}),

    phone: z
    .string({required_error: "phone is reqired"})
    .trim()
    .min(10, {message: "phone must be at lest of 10 chars."})
    .max(20, {message: "phone must not be more than 20 characters"}),

    password: z
    .string({required_error: "password is required"})
    .min(7, {message: "password must be at lest of 7 chars."})
    .max(1024, {message: "password must not be more than 1024 characters"}),


});


module.exports = singupSchema;