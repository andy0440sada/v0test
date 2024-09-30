'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"

const classData = {
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
}

export function BookingFormComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleClassChange = (value: string) => {
    setSelectedClass(value)
    setSelectedTime("")
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">フィットネスジム予約フォーム</h1>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">お名前</Label>
          <Input id="name" placeholder="山田 太郎" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="memberNumber">会員番号</Label>
          <Input id="memberNumber" placeholder="例: 1234567" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="class">クラスの種類</Label>
          <Select onValueChange={handleClassChange} value={selectedClass}>
            <SelectTrigger>
              <SelectValue placeholder="クラスを選択してください" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(classData).map(([key, value]) => (
                <SelectItem key={key} value={key}>{value.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>日付</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">時間帯</Label>
          <Select onValueChange={setSelectedTime} value={selectedTime} disabled={!selectedClass}>
            <SelectTrigger>
              <SelectValue placeholder="時間帯を選択してください" />
            </SelectTrigger>
            <SelectContent>
              {selectedClass && classData[selectedClass as keyof typeof classData].times.map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="comments">追加コメント</Label>
          <Textarea id="comments" placeholder="特別な要望やご質問があればこちらにご記入ください" />
        </div>
        <Button type="submit" className="w-full">
          予約する
        </Button>
      </form>
    </div>
  )
}