Use `rsync` function to sync files. 

```bash
rsync -aE --delete "/Users/your_username/src_folder" "/Volumes/usb_drivename/dst_folder"
```

- `-aE` instructs rsync to copy metadata and preserve permissions.
- `--delete` means it will remove all files in the destination folder that do not match the source folder. In other words, at the end of the process, both the source and destination folders will have matching contents.

## Obsidian to Markdown
Try [this](https://github.com/zoni/obsidian-export) out to export from Obsidian to Markdown. 

