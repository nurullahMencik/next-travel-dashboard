"use client"
import React from 'react'
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

const HotelformSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  description: z.string().optional(),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }),
  address: z.string().min(5, { message: "Address must be at least 2 characters" }),
  rating: z.number().min(0, { message: "Rating " }),
  pricePerNight: z.number().min(0, { message: "pricePerNight must" }), 
});

type HotelFormValues = z.infer<typeof HotelformSchema>

const HotelsForm = () => {
  const form = useForm<HotelFormValues>({
    resolver: zodResolver(HotelformSchema), 
    defaultValues: {
      name: "test name",
      description: "test description",
      location: "test location",
      address: "test address",
      rating: 0,
      pricePerNight: 0,
    },
  })

  const onSubmit = async (values: z.infer<typeof HotelformSchema>)=> {
    const hotelData ={
      name:values.name,
      description : values.description,
      location:values.location,
      address:values.address,
      rating:values.rating,
      pricePerNight:values.pricePerNight, 
    }
    console.log(hotelData)
    try {
      
      const response = await fetch("/api/hotels",{
        method:"POST",
        headers:{
          "Content-type" : "application/json"
        },
        body:JSON.stringify(hotelData)
      })

      if(!response.ok){
        throw new Error("Failed to add hotel")
      }
      
      console.log("successfuly hotel added")
      form.reset()

    } catch (error) {
      console.error("error adding hotel : ",error)
    }
  }



  return (
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hotel Name</FormLabel>
              <FormControl>
                <Input placeholder="enter hotel name" {...field} />
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
              <FormLabel>Hotel Description</FormLabel>
              <FormControl>
                <Input placeholder="enter hotel description" {...field} />
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
              <FormLabel> Hotel Location</FormLabel>
              <FormControl>
                <Input placeholder="enter hotel location" {...field} />
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
              <FormLabel>Hotel Address</FormLabel>
              <FormControl>
                <Input placeholder="enter hotel address" {...field} />
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default HotelsForm