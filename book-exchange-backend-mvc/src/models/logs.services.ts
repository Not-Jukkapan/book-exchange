import { PrismaClient } from "@prisma/client";
import { PrismaTransactionClient } from "@src/types/utils/primaAlias.types";
import prisma from "@src/services/prismaService";
import { CreateLogRequest, UpdateLogRequest } from "@src/types";

export const createLog = async (
  prisma: PrismaTransactionClient,
  data: CreateLogRequest
) => {
  const log = await prisma.logs.create({ data });
  return log;
};

export const getLogById = async (prisma: PrismaTransactionClient, id: number) => {
  const log = await prisma.logs.findUnique({ where: { id } });
  return log;
};

export const updateLog = async (
  prisma: PrismaTransactionClient,
  id: number,
  data: UpdateLogRequest
) => {
  const log = await prisma.logs.update({ where: { id }, data });
  return log;
};

export const deleteLog = async (params: PrismaTransactionClient, id: number) => {
  const log = await prisma.logs.delete({ where: { id } });
  return log;
};
