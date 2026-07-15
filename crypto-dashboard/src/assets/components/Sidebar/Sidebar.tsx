import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">
        CryptoDash
      </h1>

      <ul className="space-y-4">

        {navigation.map((item) => {

          const Icon = item.icon;

          return (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-600"
                      : "hover:bg-slate-700"
                  }`
                }
              >
                <Icon size={22} />
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