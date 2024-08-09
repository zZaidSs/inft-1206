function generateRandomStory() {
        // Define stories with placeholders for dynamic values
        const stories = [
          "It was {temperature} outside, so {name} went for a walk. When they got to {location}, they stared in horror for a few moments, then {action}. Bob saw the whole thing, but was not surprised — {name} weighs {weight}, and it was a hot day.",
          "{name} was at {location} when the temperature hit {temperature}. They saw {action} and couldn't believe their eyes. Bob, who was nearby, wasn't shocked — {name} weighs {weight} and always seems to find themselves in these situations.",
          "On a sweltering day at {location}, with the temperature at {temperature}, {name} encountered a {action}. Bob, observing from a distance, was not at all surprised — {name} weighs {weight} and is used to such unexpected events."
        ];

        // Get custom name
        const customName = document.getElementById("customname").value.trim() || "Bob";

        // Get region for unit conversion
        const isUK = document.querySelector('input[name="ukus"]:checked').value === "uk";

        // Define story components
        const storyComponents = {
          name: customName,
          location: getRandomElement(["the park", "the zoo", "the mall", "the beach", "the amusement park"]),
          action: getRandomElement(["danced a jig", "tripped over a rock", "saw a giant inflatable duck", "joined a parade", "found a hidden treasure"]),
          weight: isUK ? convertToStones(300) + " stones" : "300 pounds", // Example weight conversion
          temperature: isUK ? convertToCelsius(94) + "°C" : "94°F" // Example temperature conversion
        };

        // Generate random index for story
        const story = stories[Math.floor(Math.random() * stories.length)];
    }

