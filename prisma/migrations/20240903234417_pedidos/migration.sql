-- CreateTable
CREATE TABLE "Pedidos" (
    "id" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "Fecha_prestamos" TIMESTAMP(3) NOT NULL,
    "Fecha_devolucion" TIMESTAMP(3) NOT NULL,
    "User_Id" TEXT NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tools" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Cantidad_disponible" TEXT NOT NULL,

    CONSTRAINT "Tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" TEXT NOT NULL,
    "Cantidad_prestada" INTEGER NOT NULL,
    "Tools_id" TEXT NOT NULL,
    "Pedido_id" TEXT NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_User_Id_fkey" FOREIGN KEY ("User_Id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_Tools_id_fkey" FOREIGN KEY ("Tools_id") REFERENCES "Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_Pedido_id_fkey" FOREIGN KEY ("Pedido_id") REFERENCES "Pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
