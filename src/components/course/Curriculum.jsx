import {
  CheckCircle2,
  PlayCircle,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Curriculum({ lesson }) {
  const navigate = useNavigate();

  const [openModules, setOpenModules] = useState({
    1: false,
  });

  const module = {
    id: 1,
    title: lesson.title,
    description: lesson.description,
    completed: lesson.curriculum.filter((item) => item.completed).length,
    total: lesson.curriculum.length,
    lessons: lesson.curriculum,
  };

  const toggleModule = (id) => {
    setOpenModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">
        Course Curriculum
      </h2>

      <div className="space-y-6">
        <div
          className="
            overflow-hidden
            border
            border-border
            bg-card
            shadow-sm
          "
        >
          {/* Module Header */}

          <button
            onClick={() => toggleModule(module.id)}
            className="
              flex
              w-full
              items-center
              justify-between
              px-6
              py-5
              text-left
              transition
              hover:bg-surface
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  font-semibold
                  text-white
                "
              >
                {module.id}
              </div>

              <div>
                <h3 className="font-semibold text-text-primary">
                  {module.title}
                </h3>

                <p className="mt-1 text-sm text-text-secondary">
                  {module.description}
                </p>

                <p className="mt-2 text-xs text-text-secondary">
                  {module.completed}/{module.total} lessons completed
                </p>
              </div>
            </div>

            {openModules[module.id] ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          {/* Lessons */}

          {openModules[module.id] && (
            <div className="border-t border-border">
              {module.lessons.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() =>
                    navigate(`/learning/${lesson.id}/lesson/${item.id}`)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-border
                    px-6
                    py-4
                    text-left
                    transition
                    hover:bg-surface
                  "
                >
                  <div className="flex items-center gap-4">
                    {item.completed ? (
                      <CheckCircle2 size={20} className="text-green-600" />
                    ) : (
                      <PlayCircle size={20} className="text-primary" />
                    )}

                    <div>
                      <h4 className="font-medium text-text-primary">
                        {item.title}
                      </h4>

                      <p className="text-sm text-text-secondary">
                        {item.duration}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm text-text-secondary">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
