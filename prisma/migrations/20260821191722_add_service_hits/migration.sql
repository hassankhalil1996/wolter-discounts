-- CreateTable
CREATE TABLE "ServiceHit" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceHit_pkey" PRIMARY KEY ("id")
);
