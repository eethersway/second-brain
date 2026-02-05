# Goals Bot - Quick Commands

Just text these naturally. I'll parse and update.

---

## 📊 Logging Progress

### Fitness (Personal Records)
```
15 pushups        → updates pushup max if higher
2 pullups         → updates pullup max if higher  
20 situps         → updates situp max if higher
weight 203        → logs weight, calculates lbs lost
```

### Work
```
closed 50k        → adds $50K to ad sales
closed 125000     → adds $125K to ad sales
sold 75k deal     → same thing
```

### Counts (Incremental Goals)
```
finished book: [Title]     → +1 book (logs title)
went fishing               → +1 fishing trip
concert: [Artist/Venue]    → +1 concert
rave: [Event Name]         → +1 rave
polaroid walk              → +1 walk
foraged [mushroom type]    → +1 mushroom species
```

### Milestones (One-time Completions)
```
done: home gym             → marks complete
done: camping trip         → marks complete
done: cabin trip           → marks complete
done: backyard             → marks landscape complete
done: house project        → marks Andrew project complete
done: photo album          → marks complete
done: off leash            → marks Garth training complete
done: back fixed           → marks complete
done: married              → 🎉
done: made friend          → marks complete
done: invented             → marks this bot complete!
```

### Habits
```
tv: 45min                  → logs today's screen time
tv: 1.5hr                  → logs today's screen time
no screens today           → logs 0
```

### Food Journal
```
ate: 1 al pastor burrito           → I estimate ~650 cal, log it
ate: 2 eggs, toast, coffee         → I estimate, log it
breakfast: oatmeal with banana     → logs as breakfast
lunch: chipotle bowl               → logs as lunch  
dinner: salmon, rice, broccoli     → logs as dinner
snack: handful of almonds          → logs as snack
food today                         → shows today's food log + total cals
```
I'll estimate calories based on typical portions. If you know exact cals, add them:
```
ate: protein shake 280cal          → logs exact calories
```

### PNW History (Sub-milestones)
```
visited: [site name]       → +1 historical site
learned plant: [name]      → +1 native plant
learned animal: [name]     → +1 local animal
finished pnw book          → marks book milestone
```

### Garth Training (Sub-milestones)
```
garth: yard recall         → marks milestone
garth: distractions        → marks milestone
garth: off leash park      → marks milestone
garth: fully trained       → completes goal
```

---

## 📈 Checking Status

```
status                     → full dashboard
goals                      → list all goals + progress
fitness                    → just fitness goals
xp                         → current XP + level
week                       → this week's activity
[goal name]?               → specific goal details
```

---

## 🏆 XP Awards

XP is awarded proportionally:
- Fitness PRs: XP based on % progress toward target
- Counts: XP per item (e.g., 100 XP per book)
- Weight: 50 XP per lb lost
- Sales: 1 XP per $1000 closed
- Milestones: Full XP on completion

---

## 🎖️ Achievements

Unlocked automatically:
- **First Blood** — Complete any goal
- **Level Up** — Reach Level 2 (1000 XP)
- **Triple Threat** — Log 3 different goals in one day
- **Streak 7** — Check in 7 days straight
- **Streak 30** — Check in 30 days straight
- **Century Club** — 100 total pushups logged across sessions
- **Closer** — Hit $1M in sales
- **Big Closer** — Hit $2M in sales
- **Fit Check** — Complete all 3 fitness rep goals
- **Adventure Mode** — Complete 3 adventure goals
- **Scholar** — Finish 5 books

---

## Notes

- Logging is forgiving — "did 15 pushups today" works same as "15 pushups"
- I'll confirm every log with XP earned
- Say "undo" if you logged something wrong
- Weekly review every Sunday covers everything
