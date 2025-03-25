import type React from "react"
import {
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  Bar,
  Pie,
  Cell,
} from "recharts"

interface BarChartProps {
  data: any[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
}

export const BarChart: React.FC<BarChartProps> = ({ data, index, categories, colors, valueFormatter, yAxisWidth }) => {
  return (
    <RechartsBarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={index} />
      <YAxis tickFormatter={valueFormatter} width={yAxisWidth} />
      <Tooltip formatter={(value: any) => (valueFormatter ? valueFormatter(value) : value)} />
      <Legend />
      {categories.map((category, i) => (
        <Bar key={category} dataKey={category} fill={colors[i % colors.length]} />
      ))}
    </RechartsBarChart>
  )
}

interface LineChartProps {
  data: any[]
  index: string
  categories: string[]
  colors: string[]
  valueFormatter?: (value: number) => string
  yAxisWidth?: number
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  index,
  categories,
  colors,
  valueFormatter,
  yAxisWidth,
}) => {
  return (
    <RechartsLineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={index} />
      <YAxis tickFormatter={valueFormatter} width={yAxisWidth} />
      <Tooltip formatter={(value: any) => (valueFormatter ? valueFormatter(value) : value)} />
      <Legend />
      {categories.map((category, i) => (
        <Line
          key={category}
          type="monotone"
          dataKey={category}
          stroke={colors[i % colors.length]}
          activeDot={{ r: 8 }}
        />
      ))}
    </RechartsLineChart>
  )
}

interface PieChartProps {
  data: any[]
  index: string
  category: string
  colors: string[]
  valueFormatter?: (value: number) => string
}

export const PieChart: React.FC<PieChartProps> = ({ data, index, category, colors, valueFormatter }) => {
  return (
    <RechartsPieChart>
      <Pie
        dataKey={category}
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, i) => (
          <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value: any) => (valueFormatter ? valueFormatter(value) : value)} />
      <Legend />
    </RechartsPieChart>
  )
}

