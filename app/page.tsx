"use client";

import { useState, useEffect } from "react";
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Calendar } from '../components/ui/calendar';

const classes = {
  yoga: {
    name: "ヨガ",
    times: ["10:00", "14:00", "18:00"]
  },
  pilates: {
    name: "ピラティス",
    times: ["11:00", "15:00", "19:00"]
  },
  zumba: {
    name: "ズンバ",
    times: ["10:30", "14:30", "18:30"]
  },
  boxing: {
    name: "ボクシング",
    times: ["11:30", "15:30", "19:30"]
  }
};

const BookingForm = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setSelectedTime("");
  }, [selectedClass]);

  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">お名前</Label>
        <Input type="text" id="name" />
      </div>
      <div>
        <Label htmlFor="class">クラス</Label>
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="クラスを選択" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(classes).map(([key, value]) => (
              <SelectItem key={key} value={key}>{value.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {selectedClass && (
        <div>
          <Label htmlFor="time">時間</Label>
          <Select value={selectedTime} onValueChange={setSelectedTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="時間を選択" />
            </SelectTrigger>
            <SelectContent>
              {classes[selectedClass as keyof typeof classes].times.map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <div>
        <Label>日付</Label>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
        />
      </div>
      <div>
        <Label htmlFor="comment">コメント</Label>
        <Textarea id="comment" />
      </div>
      <Button type="submit">予約する</Button>
    </form>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* 既存のコード */}
        <BookingForm />
        {/* 既存のコード */}
      </main>
      {/* フッターは変更なし */}
    </div>
  );
}
