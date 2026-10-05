import { Bell, MoreHorizontal } from "lucide-react";

const developer = {
  name: "Aryan Sharma",
  role: "Full Stack Developer",
  level: "Pro",
  avatar: "AS",
};

const orders = [
  {
    id: "#ORD-001",
    client: "Rahul Mehta",
    project: "E-commerce Dashboard",
    budget: 18000,
    status: "In Progress",
    deadline: "May 20, 2026",
    initials: "RM",
    color: "#5B86E5",
  },
  {
    id: "#ORD-002",
    client: "Sana Kapoor",
    project: "Portfolio Website",
    budget: 8000,
    status: "Pending",
    deadline: "May 25, 2026",
    initials: "SK",
    color: "#f7a440",
  },
  {
    id: "#ORD-003",
    client: "Dev Joshi",
    project: "REST API Integration",
    budget: 12000,
    status: "Completed",
    deadline: "May 5, 2026",
    initials: "DJ",
    color: "#36b37e",
  },
];

const statusColor = {
  "In Progress": "bg-blue-50 text-blue-600",
  Pending: "bg-yellow-50 text-yellow-600",
  Completed: "bg-green-50 text-green-600",
  Cancelled: "bg-red-50 text-red-500",
};

const DeveloperPortal = () => {
  return (
    <div className="flex h-screen bg-[#f5f8ff] overflow-hidden font-sans">
      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className="h-16 bg-white border-b border-[#e8eeff]
          px-6 flex items-center justify-between"
        >
          <div className="px-5 py-5 border-b border-[#f0f4ff]">
            <h1 className="text-lg font-bold text-[#5B86E5]">DevConnect</h1>

            <p className="text-[10px] text-gray-400 mt-0.5 font-medium uppercase tracking-wide">
              Developer Portal
            </p>
          </div>

          {/* Profile + Notification */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <button
              className="relative text-gray-400
              hover:text-[#5B86E5] transition"
            >
              <Bell size={20} />

              <span
                className="absolute -top-1 -right-1 w-4 h-4
                bg-[#5B86E5] text-white text-[9px] font-bold
                rounded-full flex items-center justify-center"
              >
                3
              </span>
            </button>

            {/* Profile Logo */}
            <div
              className="w-9 h-9 rounded-full bg-[#5B86E5]
              flex items-center justify-center
              text-white text-xs font-bold"
            >
              {developer.avatar}
            </div>
          </div>
        </header>

        {/* ================= ORDERS CONTENT ================= */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Orders Card */}
          <div
            className="bg-white rounded-2xl border border-[#e8eeff]
            overflow-hidden"
          >
            {/* Card Header */}
            <div
              className="px-6 py-4 border-b border-[#f0f4ff]
              flex items-center justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  Recent Orders
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {orders.length} total orders
                </p>
              </div>
            </div>

            {/* Orders */}
            <div className="divide-y divide-[#f0f4ff]">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="px-6 py-5 flex items-center gap-4
                  hover:bg-[#fafcff] transition"
                >
                  {/* Client Logo */}
                  <div
                    className="w-10 h-10 rounded-full
                    flex items-center justify-center
                    text-white text-xs font-bold shrink-0"
                    style={{
                      backgroundColor: order.color,
                    }}
                  >
                    {order.initials}
                  </div>

                  {/* Project */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {order.project}
                      </p>

                      <span
                        className={`hidden sm:inline-block
                        text-[10px] font-semibold px-2 py-1
                        rounded-full ${statusColor[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">{order.client}</p>
                  </div>

                  {/* Budget */}
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-bold text-gray-800">
                      ₹{order.budget.toLocaleString("en-IN")}
                    </p>

                    <p className="text-[10px] text-gray-400 mt-1">Budget</p>
                  </div>

                  {/* Deadline */}
                  <div className="hidden lg:block text-right w-28">
                    <p className="text-xs font-medium text-gray-700">
                      {order.deadline}
                    </p>

                    <p className="text-[10px] text-gray-400 mt-1">Deadline</p>
                  </div>

                  {/* Mobile Status */}
                  <span
                    className={`sm:hidden text-[10px]
                    font-semibold px-2 py-1 rounded-full
                    ${statusColor[order.status]}`}
                  >
                    {order.status}
                  </span>

                  {/* More */}
                  <button
                    className="text-gray-300 hover:text-gray-600
                    transition shrink-0"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeveloperPortal;
