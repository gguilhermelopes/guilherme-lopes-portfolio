-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "imgURL" TEXT NOT NULL,
    "stack" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
