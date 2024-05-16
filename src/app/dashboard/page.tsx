import FileCard from "@/components/FileCard";

export default function Dashboard() {
    const pdfList = ["song1", "song2", "song3", "song4", "song5"];
    return (
        <div className="text-black">
            My Files
			<div className="flex flex-wrap">
            {pdfList.map(() => (
                <FileCard />
            ))}
			</div>
        </div>
    );
}
