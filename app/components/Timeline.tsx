import { Event } from "../types";
import { Icons } from "./icons";

interface TimelineProps {
  events: Event[];
}

export function Timeline({ events }: TimelineProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
        <p className="text-gray-500">No events found for this item.</p>
      </div>
    );
  }

  return (
    <div className="flow-root bg-white rounded-lg border border-gray-200 p-6">
      <ul className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 && (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-blue-600">
                    <Icons.Event />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900">
                      {event.custodian}
                    </p>
                    <p className="text-sm text-gray-500">
                      Location: {event.location}
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    {new Date(event.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 