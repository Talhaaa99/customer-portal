"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store";

export default function CustomerPortal() {
  const { customers, selectedCustomer, selectCustomer } = useStore();
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    if (!selectedCustomer) {
      selectCustomer(customers[0].name);
    } else {
      setPhotos(selectedCustomer.photos);
    }
  }, [selectedCustomer, selectCustomer, customers]);

  // Function to fetch new photos from the public API
  const fetchPhotos = () => {
    return new Array(9)
      .fill("")
      .map(() => `https://picsum.photos/150?random=${Math.random()}`);
  };

  useEffect(() => {
    // Set initial photos
    setPhotos(fetchPhotos());

    // Update photos every 10 seconds
    const interval = setInterval(() => {
      setPhotos(fetchPhotos());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r h-full flex flex-col overflow-y-auto">
        <div className="w-full">
          {customers.map((customer, index) => (
            <div
              key={index}
              className={`px-4 cursor-pointer py-8 ${
                selectedCustomer?.name === customer.name ? "bg-gray-100" : ""
              }`}
              onClick={() => selectCustomer(customer.name)}
            >
              <h2 className="text-xl font-bold">{customer.name}</h2>
              <p className="text-sm text-muted-foreground">
                {customer.details.substring(0, 300)}...
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/3 p-8 overflow-y-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {selectedCustomer?.name} details here
        </h2>
        <p className="mb-8 text-center">{selectedCustomer?.details}</p>
        <div className="grid grid-cols-3 gap-3 w-[600px]">
          {photos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Customer Photo"
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
