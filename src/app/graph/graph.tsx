"use client"
import { BarChart, Bar, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ExpenseType } from "../types/commonTypes"
import ExpenseList from "../components/expenselist/expenselist"
import Expense from "../expense/page"
import { useState } from "react"


export default function Graph () {
       
    const ExpenseList = () => {
        const [expenses, setExpenses] = useState<ExpenseType[]>({
            id: '',
          amount: 0,
          category: '',
          note: '',
          date: ''
        })
       
          

    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} ExpenseList={ExpenseList}>
          <Bar dataKey="id" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
        )
}