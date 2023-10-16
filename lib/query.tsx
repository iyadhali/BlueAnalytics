import { prisma } from './prisma';

async function getWasteCollected() {
    const results = await prisma.wastecollection.findMany({
      select: {
        id: true,
        industrialwaste: {
          select: {
            medicalwasteweight: true,
            metalweight: true,
            otherweight: true,
            plasticweight: true,
          }
        },
        residentialwaste: {
          select: {
            aluminiumweight: true,
            glassweight: true,
            otherweight: true,
            plasticweight: true,
          }
        },
        washedupwaste: {
          select: {
            otherweight: true,
            plasticweight: true,
            fishinggearweight: true,
          }
        }
      }
    });

    return results;
}

export default getWasteCollected;