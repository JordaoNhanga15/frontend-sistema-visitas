export interface VisitDto {
  id: string;
  date: string;            // 'YYYY-MM-DD'
  visitorId: string;
  hostName: string;
  department: string;
  reason: string;
  checkIn: string;         // 'HH:mm'
  checkOut?: string;       // 'HH:mm' | undefined
}
