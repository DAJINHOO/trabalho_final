import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="bg-slate-900 text-white w-64 p-4">
      <p className="mb-4 font-bold">Menu</p>

      <ul className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                
                className={({ isActive }) =>`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  isActive 
                  ? "bg-cyan-500 text-white" 
                  : "text-gray-300"
                }`}
              >
                <Icon className="text-xl" />

                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;