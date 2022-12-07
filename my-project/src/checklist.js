import React from "react";

const toDos = [
    { id: 1, name: 'Do Hack the box challenge' },
    { id: 2, name: 'Study for exam practice questions' },
    { id: 3, name: 'Watch a hacking PoC' },
    { id: 4, name: 'Read incident Reports' },
    { id: 5, name: 'Work out' },
    { id: 6, name: 'Take Medicine'},
    { id: 7, name: 'meditate 15 minutes'},
    { id: 8, name: 'get some sun you pasty bitch'},
    { id: 9, name: 'clean up'},
  ]
  
  export default function Checks() {
    return (
      <fieldset>
        <legend className="text-lg font-medium text-gray-900">Joey loves you</legend>
        <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
          {toDos.map((toDos, toDosIdx) => (
            <div key={toDosIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">
                <label htmlFor={`toDos-${toDos.id}`} className="select-none font-medium text-gray-700">
                  {toDos.name}
                </label>
              </div>
              <div className="ml-3 flex h-5 items-center">
                <input
                  id={`toDos-${toDos.id}`}
                  name={`toDos-${toDos.id}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    )
  }
  