export interface ResultListItem {
  firstPublisher: string;
  secondPublisher?: string;
}
export interface ResultListItemProps {
  item: ResultListItem;
}

export function ResultListItem({ item }: ResultListItemProps) {
  return (
    <span>
      {item.firstPublisher} - {item.secondPublisher}
    </span>
  );
}
