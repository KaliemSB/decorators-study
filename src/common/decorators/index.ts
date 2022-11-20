import { Router } from "express";

const router = Router();

export const Get = (endpoint: string) => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    router.get(endpoint, descriptor.value.bind(target));
  };
};

export const Post = (endpoint: string) => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    router.post(endpoint, descriptor.value.bind(target));
  };
};

export const Delete = (endpoint: string) => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    router.delete(endpoint, descriptor.value.bind(target));
  };
};

export const Patch = (endpoint: string) => {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    router.patch(endpoint, descriptor.value.bind(target));
  };
};

export { router };
