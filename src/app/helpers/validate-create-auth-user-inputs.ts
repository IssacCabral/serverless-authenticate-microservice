import { Request } from "express";

interface RequestInputErrors {
  field: string;
  message: string;
}

export default function (request: Request) {
  const mandatoryData = ["email", "password"];
  const errors: Array<RequestInputErrors> = [];

  for (let element of mandatoryData) {
    if (!request.body[element]) {
      errors.push({
        field: element,
        message: `The ${element} is required`,
      });
    }
  }

  return errors
}
