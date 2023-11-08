import './App.css';
import { useAppSelector } from './redux/hooks/hooks';
import { selectToDoListItems } from './redux/slices/toDoListSlice';
import {
  AppHeader,
  Gutter,
  HamburgerIcon,
  UserIcon,
  AppContent,
  ToDoList,
  NewToDoForm,
  NewTodoInput,
  NewToDoSubmitButton,
} from './customElements';

window.document.body.classList.add('bg-sky-500');

export function App() {
  const toDoListContents = useAppSelector(selectToDoListItems);

  return (
    <>
      <AppHeader className="bg-indigo-800 py-1 flex justify-between">
        <Gutter className="pl-2 pt-1">
          <HamburgerIcon className="w-11 h-11" />
        </Gutter>
        <header className="bg-indigo-800 text-white text-center">
          <h1 className="text-3xl">To Do</h1>
          <p className="text-xs italic text-yellow-200">with Custom Elements</p>
        </header>
        <Gutter className="pr-2 pt-1">
          <UserIcon className="w-11 h-11" />
        </Gutter>
      </AppHeader>
      <AppContent className="pt-6 px-6 lg:pt-36 lg:px-48 w-screen">
        <Gutter className="pb-2">
          <Gutter className="pb-2">
            <ToDoList className="TODO-LIST rounded bg-white">
              <Gutter className="p-2">
                <h1 className="text-2xl border-b-2 border-sky-900 text-sky-900">
                  To Do:
                </h1>
              </Gutter>
              <div className="LIST px-2 text-base text-sky-900">
                <ol>
                  {toDoListContents.map((entry, index) => (
                    <li className="ENTRY" key={entry}>
                      <Gutter className="pb-2">
                        {index + 1}. {entry}
                      </Gutter>
                    </li>
                  ))}
                </ol>
              </div>
            </ToDoList>
          </Gutter>
          <NewToDoForm className="pb-2">
            <NewTodoInput className="rounded-l text-base w-3/4" />
            <NewToDoSubmitButton className=" border border-violet-800 bg-violet-600 text-white rounded-r w-1/4">
              Add To Do
            </NewToDoSubmitButton>
          </NewToDoForm>
        </Gutter>
      </AppContent>
    </>
  );
}
