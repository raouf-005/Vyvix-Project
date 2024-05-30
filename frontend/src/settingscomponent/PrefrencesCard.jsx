import { Listbox, ListboxItem, Switch, Button, Image } from "@nextui-org/react";

const list = [
  "Vyvix Notifications",
  "Email Notifications",
  "Weekly Progress Reports",
  "Goal Tracking Alerts",
  "Privacy Controls",
  "Hiring",
];

export default function PreferencesCard() {
  return (
    <div className="flex flex-col gap-1 rounded-xl   max-w-80 shadow-sm bg-white dark:bg-carddm  p-0 ">
      <div className="flex justify-between ">
        <h3 className="text-black  font-medium text-xl dark:text-white">
          Notification
        </h3>
      </div>
      <Listbox aria-label="list">
        {list.map((item, index) => {
          return (
            <ListboxItem
              key={index}
              value={item}
              className="flex justify-between"
              aria-label="list-item"
            >
              <Switch className="text-black dark:text-white"
              aria-label="Dark Mode Switch"
              >{item}</Switch>
            </ListboxItem>
          );
        })}
      </Listbox>
    </div>
  );
}
