"use client"
import React, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Hotel, useHotelStore } from '@/zustand/useHotelStores'


const hotelFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  description: z.string().optional(),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }),
  address: z.string().min(5, { message: "Address must be at least 2 characters" }),
  rating: z.number().min(0, { message: "Rating " }),
  pricePerNight: z.number().min(0, { message: "pricePerNight must" }), 
});

interface EditHotelFormProps {
    open: boolean;
    onOpenChange: (value: boolean) => void;
    initialHotel: Hotel | null;
}


const EditHotelForm = ({ initialHotel, onOpenChange, open }: EditHotelFormProps) => {
    const { fetchHotels } = useHotelStore();

    const form = useForm<z.infer<typeof hotelFormSchema>>({
        resolver: zodResolver(hotelFormSchema),
        defaultValues: {
            name: "",
            description: "",
            location: "",
            address: "",
            rating: 0,

            pricePerNight: 0,
        },
    });

    useEffect(() => {
        if (initialHotel) {
            form.reset({
                name: initialHotel.name || "",
                description: initialHotel.description || "",
                location: initialHotel.location || "",
                address: initialHotel.address || "",
                rating: initialHotel.rating || 0,
                pricePerNight: initialHotel.pricePerNight || 0,

            })
        }

    }, [initialHotel, form])

    const onSubmit = async (values: z.infer<typeof hotelFormSchema>) => {
        if (!initialHotel) return;

        const updatedHotel = {
            ...initialHotel,
            ...values
        }

        try {
            const response = await fetch("/api/hotels", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: updatedHotel.id,
                    name: updatedHotel.name,
                    description: updatedHotel.description,
                    location: updatedHotel.location,
                    address: updatedHotel.address,
                    rating: updatedHotel.rating,
                    pricePerNight: updatedHotel.pricePerNight,
                }),
            })

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Update error:", errorData);
                alert(
                    "Failed to update hotel: " + (errorData?.error || "Unknown error")
                );
                return;
            }

            console.log("Hotel updated successfully");
            onOpenChange(false);
            fetchHotels();


        } catch (error) {
            console.error("PUT request error:", error);
            alert("An error occurred while updating the hotel.");
        }


    }

    return (

        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Hotel</DialogTitle>
                    <DialogDescription asChild>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Hotel Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter hotel name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter description (optional)" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Location</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter location" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                     <FormField
                                  control={form.control}
                                  name="rating"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Hotel Rating</FormLabel>
                                      <FormControl>
                                       <Input
                                  type="number"
                                  value={Number.isNaN(field.value) ? "" : field.value}
                                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="pricePerNight"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Hotel Price Per Night</FormLabel>
                                      <FormControl>
                                        <Input
                                  type="number"
                                  value={Number.isNaN(field.value) ? "" : field.value}
                                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <Button type="submit">Add Hotel</Button>
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditHotelForm