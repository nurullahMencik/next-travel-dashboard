import { prismadb } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const hotel = await prismadb.hotel.create({
      data: {
        name: body.name,
        description: body.description,
        location: body.location,
        address: body.address,
        rating: body.rating || 0.0,
        photos: body.photos || [],
        pricePerNight: body.pricePerNight,
      },
    });

    return NextResponse.json(hotel);
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json(
      { message: "someting went wrong while creting the hotel!" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const pageStr = searchParams.get("pageStr") || "1";
  const page = Number(pageStr);
  const limit = 5;
  const skip = (page - 1) * limit;

  const filters: Prisma.HotelWhereInput[] = [];

  if (name) {
    filters.push({ name: { contains: name, mode: "insensitive" as const } });
  }
  const whereClause = filters.length > 0 ? { AND: filters } : {};

  try {

    const hotels = await prismadb.hotel.findMany({
      where: whereClause,
      skip,
      take: limit,
    });
    
    const totalCount = await prismadb.hotel.count({ where: whereClause });

    return NextResponse.json({ hotels, totalCount });
    
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { message: "Something went wrong while fetching hotels!" },
      { status: 500 }
    );
  }
}
export async function PUT(request:NextRequest) {
  try {

    const body = await request.json();
    const {
      id,
      name,
      description,
      location,
      address,
      rating,
      photos,
      pricePerNight,
    } = body;

    if (!id) {
      return NextResponse.json({ error: "Hotel 'id' is required." }, { status: 400 });
    }

    const updatedHotel = await prismadb.hotel.update({
      where:{id},
      data:{
        name,
        description,
        location,
        address,
        rating,
        photos,
        pricePerNight,
        
      }
    })
    return NextResponse.json(updatedHotel);

    
  } catch (error) {
    
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Something went wrong while updating the hotel!" },
      { status: 500 }
    );
  }
}
