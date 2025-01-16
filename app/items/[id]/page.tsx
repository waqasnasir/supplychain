"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Item, Event } from "../../types";
import Link from "next/link";
import { LoadingSpinner } from "../../components/ui/LoadingSpinner";
import { ErrorMessage } from "../../components/ui/ErrorMessage";
import { Timeline } from "../../components/Timeline";

export default function ItemDetailsPage() {
  const params = useParams();
  const itemId = params?.id;
  const [item, setItem] = useState<Item | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!itemId) return;
    fetchItemAndEvents();
  }, [itemId]);

  const fetchItemAndEvents = async () => {
    try {
      setLoading(true);
      const [itemData, eventsData] = await Promise.all([
        fetch(`/api/items/${itemId}`).then(res => {
          if (!res.ok) throw new Error("Failed to fetch item");
          return res.json();
        }),
        fetch(`/api/items/${itemId}/events`).then(res => {
          if (!res.ok) throw new Error("Failed to fetch events");
          return res.json();
        })
      ]);
      
      setItem(itemData);
      setEvents(eventsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error || !item) return <ErrorMessage message={error || "Item not found"} />;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Link 
                href="/items"
                className="text-blue-600 hover:text-blue-800"
              >
                ← Back to Items
              </Link>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mt-2">{item.name}</h1>
            <p className="text-sm text-gray-500">Item ID: {item.id}</p>
          </div>
          <div className="text-sm font-medium text-gray-900">
            ${item.price.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Event History</h2>
        <Timeline events={events} />
      </div>
    </div>
  );
} 